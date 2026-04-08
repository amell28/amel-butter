import { createRoot } from "react-dom/client";
import './tailwind.css';
import WisataList from "./WisataList";



createRoot(document.getElementById("root"))
  .render(
    <div>
      <WisataList/>
    </div>
  );