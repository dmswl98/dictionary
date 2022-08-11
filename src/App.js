import { Routes, Route } from "react-router-dom";
import Result from "./pages/Result";
import ResultDetail from "./pages/ResultDetail";
import MyPage from "./pages/MyPage";
import WordList from "./pages/WordList";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Result />}>
        <Route path=":word" element={<ResultDetail />} />
      </Route>
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/:folder" element={<WordList />} />
      <Route path="*" element={<p>404</p>} />
    </Routes>
  );
}

export default App;
