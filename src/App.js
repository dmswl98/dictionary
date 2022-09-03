import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/Home/Home";
import SearchResult from "./routes/SearchResult/SearchResult";
import MyPage from "./routes/MyPage/MyPage";
import WordList from "./routes/WordList/WordList";
import NotFoundPage from "./routes/NotFoundPage/NotFoundPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="search/:word" element={<SearchResult />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="/mypage/:folderName" element={<WordList />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
