import { BrowserRouter as Router, Route, Routes } from "react-router";
import AddNew from "./pages/AddNew";
import Home from "./pages/Home";
import UpdateNew from "./pages/Updatepage";
import RegistrationPage from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectRouter from "./protectedRoute/ProtectRouter";
AbortSignal;

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/addnew" element={<AddNew />} />
      <Route path="/updatenew/:id" element={<UpdateNew />} />
      <Route element={<ProtectRouter />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
