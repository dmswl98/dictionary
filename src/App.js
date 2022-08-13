import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import MyPage from "./pages/MyPage";
import WordList from "./pages/WordList";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:word" element={<Result />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/:folderName" element={<WordList />} />
      <Route path="*" element={<p>404</p>} />
    </Routes>
  );
}

export default App;
