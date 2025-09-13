import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./page/Navbar";
import CreateBlogs from "./page/create";
import User from "./page/user";
import BlogDetail from "./page/BlogDetails";
import UpdateBlog from "./page/UpdateBlog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/create" element={<CreateBlogs />} />
            <Route path="/update" element={< UpdateBlog/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
