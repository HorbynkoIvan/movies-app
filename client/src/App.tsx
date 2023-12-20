import { BrowserRouter } from "react-router-dom";

import { Router } from "@/routes";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
      <Router />
    </BrowserRouter>
  );
}

export default App;
