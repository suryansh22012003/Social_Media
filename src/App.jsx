import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import { useState } from "react";
import PostListProvider from "./store/post-store";
import CardCollect from "./components/CardCollect";
import CreatePost from "./components/CreatePost";
function App() {
  const [currentUI, setUI] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar currentUI={currentUI} setUI={setUI}></Sidebar>

        <div className="content">
          <Header></Header>

          {currentUI === "Home" && <CardCollect></CardCollect>}
          {currentUI === "Create Post" && <CreatePost></CreatePost>}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
