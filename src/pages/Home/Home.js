import { useContext, useEffect, useState } from "react";
import axiosBase from "../../components/axios";
import { AppState } from "../../App";
import QuestionDetail from "../Question/QuestionDetail";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const { user } = useContext(AppState);
  const [question, setQuestions] = useState([]);
  const [search, setSearch] = useState("");
  const [Filter, setFilter] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const axios = axiosBase();
  const handleclick = () => {
    navigate("/askquestion");
  };
  useEffect(() => {
    allQuestions();
  }, []);
  //all questions load here
  const allQuestions = async () => {
    try {
      const data = await axios.get("/questions/all-questions", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setQuestions(data?.data?.allQuestion);
    } catch (error) {
      console.log(error.response);
    }
  };

  // laosQuestions()
  useEffect(() => {
    setFilter(
      question.filter((q) =>
        q.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, question]);

  return (
    <section className="container home-kebi">
      <div className="heros">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <button className="blue_button" onClick={handleclick}>
              AskQuestions
            </button>
          </div>

          <div className="col-sm-6  col-md-6">
            <h2>
              WellCome <span className="user">Back</span>
            </h2>
          </div>
        </div>
      </div>

      <div>
        <div className="search_bar">
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="search...."
          />
        </div>
      </div>

      <div>
        <div>
          {Filter.map((quest, i) => (
            <QuestionDetail question={quest} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
