import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import axios from "./axiosConfig";
import { useEffect, useState, createContext } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import NewQuestion from "./pages/Question/NewQuestion";
import Answer from "./pages/Answer/Answer";

export const AppState = createContext();

function App() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data);
    } catch (error) {
      console.log(error.response);
      navigate("/login");
    }
  }
  useEffect(() => {
    checkUser();
  }, []);
  return (
    <AppState.Provider value={{ user, setUser }}>
      <Header />
      <Routes>
        <Route path="/Answer/:questionid" element={<Answer />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/askquestion" element={<NewQuestion />} />
      </Routes>
      <Footer />
    </AppState.Provider>
  );
}

export default App;
