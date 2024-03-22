import { useState } from "react";
export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  return <p>Curently Active Question</p>;
}
