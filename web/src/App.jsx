import { BrowserRouter as Router, Route, Routes } from "react-router";
import AddNew from "./pages/AddNew";
import Home from "./pages/Home";
import UpdateNew from "./pages/Updatepage";
AbortSignal;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addnew" element={<AddNew />} />
      <Route path="/updatenew/:id" element={<UpdateNew />} />
    </Routes>
  );
}

export default App;
