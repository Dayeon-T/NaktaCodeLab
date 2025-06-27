import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Homework from "./pages/Homework";
import Grades from "./pages/Grades";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Homework" element={<Homework />} />
          <Route path="/Grades" element={<Grades />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
