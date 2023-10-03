import { useState } from "react";
import Basic from "./components/Basic";
import Basic2 from "./components/Basic2";
import Practice2 from "./practice/Practice2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudyListPage from "./pages/StudyListPage";
import StudyDetailPage from "./pages/StudyDetailPage";
import MyStudyPage from "./pages/MyStudyPage";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  const helloText = "hello world";

  return (
    <>
      {/* <Basic parentText={helloText} /> */}
      {/* <Basic2 parentText={helloText} /> */}
      {/* <Practice2 /> */}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/study-list" element={<StudyListPage />} />
          <Route path="/study-list/:id" element={<StudyDetailPage />} />
          <Route path="/my-study" element={<MyStudyPage />} />{" "}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
