import { Highlight } from "@chakra-ui/react";

export default function Highlighter() {
  return (
    <main>
      <Highlight
        query="LostnFound"
        styles={{ px: "1", py: "1", bg: "orange.100" }}
      >
        LostnFound here
      </Highlight>
    </main>
  );
}
