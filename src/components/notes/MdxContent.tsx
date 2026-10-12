import ReactMarkdown from "react-markdown";
import { Prose } from "@/components/ui/Prose";

export function MdxContent({ source }: { source: string }) {
  return (
    <Prose>
      <ReactMarkdown>{source}</ReactMarkdown>
    </Prose>
  );
}
