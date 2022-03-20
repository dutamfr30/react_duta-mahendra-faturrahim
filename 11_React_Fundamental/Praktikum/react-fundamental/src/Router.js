import ReactDOM from "react-dom";
import { BrowserRouter as Tes, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";

export default function React() {
    return (
      <Tes>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Tes>
    );
  }


  