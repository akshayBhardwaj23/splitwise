import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Protected from "./Auth/Protected";
import Login from "./Auth/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
