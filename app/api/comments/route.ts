import { NextRequest, NextResponse } from "next/server";
import {
  fetchComments,
  insertComment,
  toggleHideComment,
  deleteComment,
  likeComment,
  nestComments,
  getDatabaseUrl,
} from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const articleId = searchParams.get("articleId") || undefined;
    const includeHidden = searchParams.get("includeHidden") === "true";
    const flat = searchParams.get("flat") === "true";

    const rawComments = await fetchComments(articleId, includeHidden);
    const comments = flat ? rawComments : nestComments(rawComments);
    const hasDbUrl = Boolean(getDatabaseUrl());

    return NextResponse.json({
      success: true,
      comments,
      count: rawComments.length,
      dbConfigured: hasDbUrl,
    });
  } catch (error) {
    console.error("GET /api/comments error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      parentId,
      parent_id,
      articleId,
      articleSlug,
      articleTitle,
      articleType,
      pagePath,
      authorName,
      name,
      authorEmail,
      email,
      content,
    } = body;

    const isContactSubmission = articleType === "contact";
    const resolvedParentId = parentId || parent_id ? Number(parentId || parent_id) : null;
    const resolvedArticleId = (articleId || articleSlug || (isContactSubmission ? "direct-contact" : "")).trim();
    const resolvedAuthorName = (authorName || name || "").trim();
    const resolvedEmail = (authorEmail || email || "").trim();
    const resolvedTitle = (articleTitle || (isContactSubmission ? "Direct Contact Message" : "Article")).trim();
    const resolvedContent = (content || "").trim();

    // Validation
    if (!resolvedArticleId || !resolvedAuthorName || !resolvedContent) {
      return NextResponse.json(
        {
          success: false,
          error: "authorName, content, and valid destination are required.",
        },
        { status: 400 }
      );
    }

    if (resolvedAuthorName.length > 100) {
      return NextResponse.json(
        { success: false, error: "Name must be 100 characters or less." },
        { status: 400 }
      );
    }

    if (resolvedContent.length > 2000) {
      return NextResponse.json(
        { success: false, error: "Comment must be 2000 characters or less." },
        { status: 400 }
      );
    }

    const comment = await insertComment({
      parent_id: resolvedParentId,
      article_id: resolvedArticleId,
      article_title: resolvedTitle,
      article_type: isContactSubmission
        ? "contact"
        : articleType === "literature"
        ? "literature"
        : "tech-blog",
      page_path: String(pagePath || (isContactSubmission ? "/contact" : "/")).trim(),
      author_name: resolvedAuthorName,
      author_email: resolvedEmail || undefined,
      content: resolvedContent,
    });

    return NextResponse.json({ success: true, comment }, { status: 201 });
  } catch (error) {
    console.error("POST /api/comments error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to post comment" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, action, delta, isHidden } = body;

    if (!id || typeof id !== "number") {
      return NextResponse.json(
        { success: false, error: "Valid numeric comment ID is required" },
        { status: 400 }
      );
    }

    if (action === "like") {
      const result = await likeComment(id, typeof delta === "number" ? delta : 1);
      return NextResponse.json({ success: true, likes: result.likes });
    }

    if (action === "toggle_hide") {
      const result = await toggleHideComment(id, isHidden);
      return NextResponse.json({ success: true, is_hidden: result.is_hidden });
    }

    return NextResponse.json(
      { success: false, error: "Unknown action. Expected 'like' or 'toggle_hide'" },
      { status: 400 }
    );
  } catch (error) {
    console.error("PATCH /api/comments error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update comment" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const idParam = searchParams.get("id");
    let id: number | null = idParam ? parseInt(idParam, 10) : null;

    if (!id) {
      try {
        const body = await req.json();
        if (body && typeof body.id === "number") id = body.id;
      } catch {
        // no body
      }
    }

    if (!id || isNaN(id)) {
      return NextResponse.json(
        { success: false, error: "Comment ID is required" },
        { status: 400 }
      );
    }

    await deleteComment(id);
    return NextResponse.json({ success: true, deletedId: id });
  } catch (error) {
    console.error("DELETE /api/comments error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete comment" },
      { status: 500 }
    );
  }
}
