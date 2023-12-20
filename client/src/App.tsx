import { BrowserRouter } from "react-router-dom";
import { Button } from "@mui/material";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
      <Button variant="outlined">Outlined</Button>
    </BrowserRouter>
  );
}

export default App;
