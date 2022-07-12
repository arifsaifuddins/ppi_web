import React, { useState } from "react";
import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import Page404 from "./components/layouts/404";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import About from "./components/pages/About";
import Admin from "./components/pages/auth/Admin";
import Login from "./components/pages/auth/Login";
import Blog from "./components/pages/blogs/Blog";
import Blogs from "./components/pages/blogs/Blogs";
import Contact from "./components/pages/Contact";
import FAQs from "./components/pages/FAQs";
import Home from "./components/pages/Home";
import Organize from "./components/pages/organizations/Organize";
import Presidents from "./components/pages/organizations/Presidents";
import Section from "./components/pages/organizations/Section";
import VisMiss from "./components/pages/organizations/VisMiss";
import ToTop from "./components/templates/ToTop";

function App() {
  const name = true
  const [visitor, setVisitor] = useState('')

  useEffect(() => {

    if (localStorage.key("mode")) {
      document.querySelector("html").classList.add("dark");
      document.querySelector(".mode").classList.remove("text-teal-800");
      document.querySelector(".mode").classList.add("text-yellow-200");
    }

    getVisitor()

  }, [])

  const getVisitor = async () => {
    return await fetch('http://127.0.0.1:2000/api/visit/get')
      .then(k => k.json())
      .then(a => setVisitor(a.data))
  }

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/organizations" element={<Organize />} >
          <Route index element={<Presidents />} />
          <Route path="vision" element={<VisMiss />} />
          <Route path="section/:slug" element={<Section />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/admin" element={name ? <Admin /> : <Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <ToTop />

      <Footer visit={visitor} />
    </div>
  );
}

export default App;