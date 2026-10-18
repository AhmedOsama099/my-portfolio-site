import { neon } from "@neondatabase/serverless";

export interface Comment {
  id: number;
  parent_id?: number | null;
  article_id: string;
  article_title: string;
  article_type: "tech-blog" | "literature" | "contact";
  page_path: string;
  author_name: string;
  author_email?: string;
  content: string;
  created_at: string;
  is_approved: boolean;
  is_hidden: boolean;
  likes: number;
  replies?: Comment[];
}

// Fallback in-memory comments for local development or when DATABASE_URL is not yet configured
let fallbackComments: Comment[] = [
  {
    id: 1,
    parent_id: null,
    article_id: "what-is-git",
    article_title: "What is GIT",
    article_type: "tech-blog",
    page_path: "/tech-blog/git/what-is-git",
    author_name: "Omar Khaled",
    author_email: "omar.khaled@example.com",
    content: "Great breakdown of distributed vs centralized version control. The diagrams helped clarify local vs remote repos immensely!",
    created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
    is_approved: true,
    is_hidden: false,
    likes: 8,
  },
  {
    id: 101,
    parent_id: 1,
    article_id: "what-is-git",
    article_title: "What is GIT",
    article_type: "tech-blog",
    page_path: "/tech-blog/git/what-is-git",
    author_name: "Ahmed Osama (Author)",
    author_email: "ahmed@example.com",
    content: "Thank you Omar! Glad the branch visualization was helpful. More deep-dives on rebase and cherry-pick coming soon.",
    created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
    is_approved: true,
    is_hidden: false,
    likes: 4,
  },
  {
    id: 2,
    parent_id: null,
    article_id: "structural-type-system",
    article_title: "Structural Type System",
    article_type: "tech-blog",
    page_path: "/tech-blog/ts/structural-type-system",
    author_name: "Sara Mahmoud",
    author_email: "sara.m@example.com",
    content: "The comparison between nominal typing in C#/Java and structural typing in TypeScript is so spot on. Thanks for this deep dive!",
    created_at: new Date(Date.now() - 3600000 * 18).toISOString(),
    is_approved: true,
    is_hidden: false,
    likes: 12,
  },
  {
    id: 3,
    parent_id: null,
    article_id: "منظر",
    article_title: "مُنظِّر",
    article_type: "literature",
    page_path: "/blog",
    author_name: "كريم النجار",
    author_email: "kareem.naggar@example.com",
    content: "كلمات عميقة تلمس الوجدان، الأسلوب البلاغي سلس والتشبيهات في غاية الدقة والتأمل.",
    created_at: new Date(Date.now() - 3600000 * 28).toISOString(),
    is_approved: true,
    is_hidden: false,
    likes: 15,
  },
  {
    id: 103,
    parent_id: 3,
    article_id: "منظر",
    article_title: "مُنظِّر",
    article_type: "literature",
    page_path: "/blog",
    author_name: "أحمد أسامة (الكاتب)",
    author_email: "ahmed@example.com",
    content: "أشكرك جزيل الشكر أخي كريم، يسعدني دائمًا أن تجد في الحروف صدىً يلامس الوجدان والتأمل.",
    created_at: new Date(Date.now() - 3600000 * 25).toISOString(),
    is_approved: true,
    is_hidden: false,
    likes: 6,
  },
];

let tableInitialized = false;

export function getDatabaseUrl(): string | null {
  return process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || null;
}

export async function initCommentsTable() {
  const dbUrl = getDatabaseUrl();
  if (!dbUrl || tableInitialized) return;

  try {
    const sql = neon(dbUrl);
    // Create base table if not exists
    await sql`
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        parent_id INTEGER,
        article_id VARCHAR(255) NOT NULL,
        article_title VARCHAR(255) NOT NULL,
        article_type VARCHAR(50) NOT NULL,
        page_path VARCHAR(255) NOT NULL,
        author_name VARCHAR(100) NOT NULL,
        author_email VARCHAR(255),
        content TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        is_approved BOOLEAN DEFAULT TRUE,
        is_hidden BOOLEAN DEFAULT FALSE,
        likes INTEGER DEFAULT 0
      );
    `;

    // Ensure columns exist on already created tables
    await sql`ALTER TABLE comments ADD COLUMN IF NOT EXISTS parent_id INTEGER;`;
    await sql`ALTER TABLE comments ADD COLUMN IF NOT EXISTS is_hidden BOOLEAN DEFAULT FALSE;`;
    await sql`ALTER TABLE comments ADD COLUMN IF NOT EXISTS likes INTEGER DEFAULT 0;`;

    // Create indexes
    await sql`CREATE INDEX IF NOT EXISTS idx_comments_article_id ON comments(article_id);`;
    await sql`CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at DESC);`;
    await sql`CREATE INDEX IF NOT EXISTS idx_comments_parent_id ON comments(parent_id);`;

    tableInitialized = true;
  } catch (error) {
    console.warn("Neon table init warning (falling back to memory):", error);
  }
}

/**
 * Organizes flat comment list into hierarchical tree of parent comments and their replies
 */
export function nestComments(flatComments: Comment[]): Comment[] {
  const map = new Map<number, Comment>();
  const topLevel: Comment[] = [];

  // Create cloned map with empty replies array
  flatComments.forEach((c) => {
    map.set(c.id, { ...c, replies: [] });
  });

  flatComments.forEach((c) => {
    const item = map.get(c.id)!;
    if (c.parent_id && map.has(c.parent_id)) {
      const parent = map.get(c.parent_id)!;
      parent.replies = parent.replies || [];
      parent.replies.push(item);
    } else {
      topLevel.push(item);
    }
  });

  return topLevel;
}

export async function fetchComments(
  articleId?: string,
  includeHidden = false
): Promise<Comment[]> {
  const dbUrl = getDatabaseUrl();

  if (dbUrl) {
    try {
      await initCommentsTable();
      const sql = neon(dbUrl);

      let rows: Comment[] = [];
      if (articleId) {
        if (includeHidden) {
          const res = await sql`
            SELECT * FROM comments 
            WHERE article_id = ${articleId}
            ORDER BY created_at ASC
          `;
          rows = res as unknown as Comment[];
        } else {
          const res = await sql`
            SELECT * FROM comments 
            WHERE article_id = ${articleId} AND is_hidden = false AND is_approved = true
            ORDER BY created_at ASC
          `;
          rows = res as unknown as Comment[];
        }
      } else {
        if (includeHidden) {
          const res = await sql`
            SELECT * FROM comments 
            ORDER BY created_at DESC
            LIMIT 100
          `;
          rows = res as unknown as Comment[];
        } else {
          const res = await sql`
            SELECT * FROM comments 
            WHERE is_hidden = false AND is_approved = true
            ORDER BY created_at DESC
            LIMIT 100
          `;
          rows = res as unknown as Comment[];
        }
      }
      return rows;
    } catch (err) {
      console.warn("Database fetch error, using fallback comments:", err);
    }
  }

  // In-memory fallback
  let list = [...fallbackComments];
  if (articleId) {
    list = list.filter((c) => c.article_id === articleId);
  }
  if (!includeHidden) {
    list = list.filter((c) => !c.is_hidden && c.is_approved);
  }
  return list.sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

export async function insertComment(data: {
  parent_id?: number | null;
  article_id: string;
  article_title: string;
  article_type: "tech-blog" | "literature" | "contact";
  page_path: string;
  author_name: string;
  author_email?: string;
  content: string;
}): Promise<Comment> {
  const dbUrl = getDatabaseUrl();

  if (dbUrl) {
    try {
      await initCommentsTable();
      const sql = neon(dbUrl);
      const rows = await sql`
        INSERT INTO comments (
          parent_id,
          article_id,
          article_title,
          article_type,
          page_path,
          author_name,
          author_email,
          content,
          is_approved,
          is_hidden,
          likes
        ) VALUES (
          ${data.parent_id || null},
          ${data.article_id},
          ${data.article_title},
          ${data.article_type},
          ${data.page_path},
          ${data.author_name},
          ${data.author_email || null},
          ${data.content},
          true,
          false,
          0
        )
        RETURNING *;
      `;
      return rows[0] as Comment;
    } catch (err) {
      console.warn("Database insert error, using fallback store:", err);
    }
  }

  // In-memory fallback
  const newComment: Comment = {
    id: Date.now(),
    parent_id: data.parent_id || null,
    article_id: data.article_id,
    article_title: data.article_title,
    article_type: data.article_type,
    page_path: data.page_path,
    author_name: data.author_name,
    author_email: data.author_email,
    content: data.content,
    created_at: new Date().toISOString(),
    is_approved: true,
    is_hidden: false,
    likes: 0,
  };
  fallbackComments.unshift(newComment);
  return newComment;
}

export async function toggleHideComment(
  id: number,
  explicitHidden?: boolean
): Promise<{ success: boolean; is_hidden: boolean }> {
  const dbUrl = getDatabaseUrl();

  if (dbUrl) {
    try {
      await initCommentsTable();
      const sql = neon(dbUrl);
      let rows;
      if (typeof explicitHidden === "boolean") {
        rows = await sql`
          UPDATE comments 
          SET is_hidden = ${explicitHidden} 
          WHERE id = ${id}
          RETURNING id, is_hidden;
        `;
      } else {
        rows = await sql`
          UPDATE comments 
          SET is_hidden = NOT is_hidden 
          WHERE id = ${id}
          RETURNING id, is_hidden;
        `;
      }
      if (rows && rows[0]) {
        return { success: true, is_hidden: Boolean(rows[0].is_hidden) };
      }
    } catch (err) {
      console.warn("Database toggleHide error:", err);
    }
  }

  // Fallback in-memory
  const comment = fallbackComments.find((c) => c.id === id);
  if (comment) {
    comment.is_hidden =
      typeof explicitHidden === "boolean" ? explicitHidden : !comment.is_hidden;
    return { success: true, is_hidden: comment.is_hidden };
  }
  return { success: false, is_hidden: false };
}

export async function deleteComment(id: number): Promise<{ success: boolean }> {
  const dbUrl = getDatabaseUrl();

  if (dbUrl) {
    try {
      await initCommentsTable();
      const sql = neon(dbUrl);
      // Delete comment and any replies
      await sql`
        DELETE FROM comments 
        WHERE id = ${id} OR parent_id = ${id};
      `;
      return { success: true };
    } catch (err) {
      console.warn("Database deleteComment error:", err);
    }
  }

  // Fallback in-memory
  fallbackComments = fallbackComments.filter(
    (c) => c.id !== id && c.parent_id !== id
  );
  return { success: true };
}

export async function likeComment(
  id: number,
  delta: number = 1
): Promise<{ success: boolean; likes: number }> {
  const dbUrl = getDatabaseUrl();

  if (dbUrl) {
    try {
      await initCommentsTable();
      const sql = neon(dbUrl);
      const rows = await sql`
        UPDATE comments 
        SET likes = GREATEST(0, COALESCE(likes, 0) + ${delta})
        WHERE id = ${id}
        RETURNING id, likes;
      `;
      if (rows && rows[0]) {
        return { success: true, likes: Number(rows[0].likes) };
      }
    } catch (err) {
      console.warn("Database likeComment error:", err);
    }
  }

  // Fallback in-memory
  const comment = fallbackComments.find((c) => c.id === id);
  if (comment) {
    comment.likes = Math.max(0, (comment.likes || 0) + delta);
    return { success: true, likes: comment.likes };
  }
  return { success: false, likes: 0 };
}
