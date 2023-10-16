import { PostContentContainer } from "./styles";
import ReactMarkdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown
        children={content}
        components={{
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <Prism language={match[1]} style={dracula}>
                {children
                  ? Array.isArray(children)
                    ? children.join("")
                    : children.toString()
                  : ""}
              </Prism>
            ) : (
              <code className={className}>{children}</code>
            );
          },
        }}
      />
    </PostContentContainer>
  );
}
