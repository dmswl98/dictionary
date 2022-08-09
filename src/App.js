import { Routes, Route } from "react-router-dom";
import Result from "./pages/Result";
import ResultDetail from "./pages/ResultDetail";
import MyPage from "./pages/MyPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Result />}>
        <Route path=":word" element={<ResultDetail />} />
      </Route>
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<p>404</p>} />
    </Routes>
  );
}

export default App;
