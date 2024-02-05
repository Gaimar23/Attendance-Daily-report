import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Admin from "./pages/admin/Admin";
import Super from "./pages/super/Super";
import List from "./pages/list/List";
import Report from "./pages/report/Report";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="admin">
            <Route index element={<Admin />} />
            <Route path="list" element={<List />} />
          </Route>
          <Route path="super" element={<Super />} />
          <Route path="super/report" element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
