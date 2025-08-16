import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeSpaceProps {
  codeBlocks: string[];
  language: string;
  showLineNumbers?: boolean;
}

const CodeSpace: React.FC<CodeSpaceProps> = ({
  codeBlocks,
  language,
  showLineNumbers = true,
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden bg-[#0A1929] shadow-lg my-4">
      <div className="flex items-center px-4 py-2 bg-[#132F4C] border-b border-[#1E4976]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
      </div>
      <div className="divide-y divide-[#1E4976]">
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            lineHeight: "1.5",
            background: "#0A1929",
          }}
        >
          {codeBlocks.join("\n")}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSpace;
