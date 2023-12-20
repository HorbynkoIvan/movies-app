import { BrowserRouter } from "react-router-dom";
// import { useState } from "react";

import { AppBar } from "@common/components";
import { Sidebar } from "@common/components/Sidebar";

function App() {
  // const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
      <AppBar />
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
