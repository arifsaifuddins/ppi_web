import Cookies from "js-cookie"
import React, { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import TopBarProgress from "react-topbar-progress-indicator"

import Page404 from "./components/layouts/404"
import Footer from "./components/layouts/Footer"
import Header from "./components/layouts/Header"

import Contact from "./components/pages/Contact"
import FAQs from "./components/pages/FAQs"
import Home from "./components/pages/Home"
import About from "./components/pages/About"

import Admin from "./components/pages/auth/Admin"
import PostEdit from "./components/pages/auth/fields/PostEdit"
import SecEdit from "./components/pages/auth/fields/SecEdit"
import Login from "./components/pages/auth/Login"

import All from "./components/pages/blogs/All"
import AutBlog from "./components/pages/blogs/AuthorBlog"
import Blog from "./components/pages/blogs/Blog"
import Blogs from "./components/pages/blogs/Blogs"
import CateBlog from "./components/pages/blogs/CategoriesBlog"
import SearchBlog from "./components/pages/blogs/SearchBlog"

import Base from "./components/pages/organizations/Base"
import Organize from "./components/pages/organizations/Organize"
import Presidents from "./components/pages/organizations/Presidents"
import Section from "./components/pages/organizations/Section"
import Thesis from "./components/pages/organizations/Thesises"
import VisMiss from "./components/pages/organizations/VisMiss"
import SearchBases from "./components/pages/organizations/bases/SearchBase"
import AllBases from "./components/pages/organizations/bases/AllBases"
import SearchPdf from "./components/pages/organizations/thesis/SearchPdf"
import Faculty from "./components/pages/organizations/thesis/Faculty"
import AllPdf from "./components/pages/organizations/thesis/AllPdf"
import Programs from "./components/pages/organizations/thesis/Programs"
import Campus from "./components/pages/organizations/thesis/Campus"

import ToTop from "./components/templates/ToTop"
import { getVisitor } from "./Gets"
import ReadThesis from "./components/pages/organizations/thesis/ReadThesis"

function App() {
  const [admin, setAdmin] = useState(false)

  const [visitor, setVisitor] = useState(null)

  const [progress, setProgress] = useState(false)
  const [prevLoc, setPrevLoc] = useState("")
  const location = useLocation()

  const adm = import.meta.env.VITE_ADMIN
  const idadm = import.meta.env.VITE_ID

  useEffect(() => {
    if (Cookies.get(adm) && Cookies.get(idadm)) {
      setAdmin(true)
    } else if (!Cookies.get(adm)) {
      setAdmin(false)
    }
  })

  useEffect(() => {
    setPrevLoc(location.pathname)
    setProgress(true)
    if (location.pathname === prevLoc) {
      setPrevLoc('')
    }
  }, [location])

  useEffect(() => {
    setProgress(false)
  }, [prevLoc])

  useEffect(() => {

    if (localStorage.getItem("mode")) {
      document.querySelector("html").classList.add("dark")
      document.querySelector(".mode").classList.remove("text-teal-800")
      document.querySelector(".mode").classList.add("text-yellow-200")
    }

    getVisitor().then(a => setVisitor(a.data))

  }, [])

  return (
    <div>
      {progress && <TopBarProgress />}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />}>
          <Route index element={<All />} />
          <Route path="category/:category" element={<CateBlog />} />
          <Route path="author/:author" element={<AutBlog />} />
          <Route path=":s" element={<SearchBlog />} />
        </Route>
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/blog/edit/:slug" element={admin ? <PostEdit /> : <Page404 />} />
        <Route path="/section/edit/:slug" element={admin ? <SecEdit /> : <Page404 />} />
        <Route path="/organizations" element={<Organize />} >
          <Route index element={<Presidents />} />
          <Route path="vision" element={<VisMiss />} />
          <Route path="bases" element={<Base />} >
            <Route index element={<AllBases />} />
            <Route path=":s" element={<SearchBases />} />
          </Route>
          <Route path="section/:slug" element={<Section />} />
          <Route path="thesis/" element={<Thesis />} >
            <Route index element={<AllPdf />} />
            <Route path="p/:program" element={<Programs />} />
            <Route path="d/:detail" element={<ReadThesis />} />
            <Route path="c/:campus" element={<Campus />} />
            <Route path="f/:faculty" element={<Faculty />} />
            <Route path=":s" element={<SearchPdf />} />
          </Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/admin" element={admin ? <Admin /> : <Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <ToTop />

      <Footer visit={visitor} />
    </div>
  )
}

export default App