import { createRoot } from "react-dom/client";
import TailwindCSS from "./Tailwindcss";
import './tailwind.css';
import Formloker from "./Formloker";


createRoot(document.getElementById("root"))
  .render(
    <div>
      {/* <Tailwindcss /> */}
      <Formloker/>
    </div>
  );