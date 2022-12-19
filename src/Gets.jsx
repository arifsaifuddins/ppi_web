import Cookies from "js-cookie"

const nodeurl = import.meta.env.VITE_NODEURL
const phpurl = import.meta.env.VITE_PHPURL

export const getVisitor = async () => {
  return await fetch(`${nodeurl}/visit/get`)
    .then(k => k.json())
}

export const getCategories = async () => {
  return await fetch(`${nodeurl}/category/get`)
    .then(k => k.json())
}

export const getCategoriesLim = async (limit) => {
  return await fetch(`${nodeurl}/category/get/${limit}`)
    .then(k => k.json())
}

export const delCategories = async (id) => {
  await fetch(`${nodeurl}/category/delete/${id}`, {
    method: 'DELETE'
  })
}

export const getAdmins = async () => {
  return await fetch(`${nodeurl}/admin/get`)
    .then(k => k.json())
}

export const delAdmins = async (id) => {
  await fetch(`${nodeurl}/admin/delete/${id}`, {
    method: 'DELETE'
  })
}

export const getAdmin = async () => {
  return await fetch(`${nodeurl}/admin/admin/${Cookies.get('id_admin')}`)
    .then(k => k.json())
}

export const getVismiss = async () => {
  return await fetch(`${nodeurl}/mission/get`)
    .then(k => k.json())
}

export const getPres = async () => {
  return await fetch(`${phpurl}/presidents.php/?president=president`)
    .then(k => k.json())
}

export const getcoPres = async () => {
  return await fetch(`${phpurl}/presidents.php/?president=copresident`)
    .then(k => k.json())
}

export const getFAQs = async () => {
  return await fetch(`${nodeurl}/faqs/get`)
    .then(k => k.json())
}

export const getSections = async (category) => {
  return await fetch(`${phpurl}/sections.php/?category=${category}`)
    .then(k => k.json())
}

export const getSection = async (slug) => {
  return await fetch(`${phpurl}/sections.php/?slug=${slug}`)
    .then(k => k.json())
}

export const getBlogs = async (page) => {
  return await fetch(`${phpurl}/blogs.php/?page=${page}`)
    .then(k => k.json())
}

export const getBlogsCat = async (page = 0, category) => {
  return await fetch(`${phpurl}/blogs.php/?category=${category}&page=${page}`)
    .then(k => k.json())
}

export const getBlogsAut = async (page = 0, author) => {
  return await fetch(`${phpurl}/blogs.php/?author=${author}&page=${page}`)
    .then(k => k.json())
}

export const searchBlogsAut = async (page = 0, s) => {
  return await fetch(`${phpurl}/blogs.php/?s=${s}&page=${page}`)
    .then(k => k.json())
}

export const blogsFav = async (favorite) => {
  return await fetch(`${phpurl}/blogs.php/?favorite=${favorite}`)
    .then(k => k.json())
}

export const blogsDis = async (dis) => {
  return await fetch(`${phpurl}/blogs.php/?display=${dis}`)
    .then(k => k.json())
}

export const getBlog = async (slug) => {
  return await fetch(`${phpurl}/blogs.php/?slug=${slug}`)
    .then(k => k.json())
}

export const getBlogv = async (slug) => {
  return await fetch(`${phpurl}/blogs.php/?v=${slug}`)
    .then(k => k.json())
}

export const delBlogs = async (id) => {
  await fetch(`${phpurl}/blogs.php/?id=${id}`, {
    method: 'DELETE'
  })
}

export const delSecs = async (id) => {
  await fetch(`${phpurl}/sections.php/?id=${id}`, {
    method: 'DELETE'
  })
}

export const delFaqs = async (id) => {
  await fetch(`${nodeurl}/faqs/delete/${id}`, {
    method: 'DELETE'
  })
}

export const getPdfs = async (page) => {
  return await fetch(`${phpurl}/pdfs.php/?page=${page}`)
    .then(k => k.json())
}

export const searchPdfs = async (s, page) => {
  return await fetch(`${phpurl}/pdfs.php/?s=${s}&page=${page}`)
    .then(k => k.json())
}

export const searchPdfsBase = async (s, page) => {
  return await fetch(`${phpurl}/bases.php/?s=${s}&page=${page}`)
    .then(k => k.json())
}

export const getProgramPdfs = async (program, page) => {
  return await fetch(`${phpurl}/pdfs.php/?program=${program}&page=${page}`)
    .then(k => k.json())
}

export const getFacultyPdfs = async (faculty, page) => {
  return await fetch(`${phpurl}/pdfs.php/?faculty=${faculty}&page=${page}`)
    .then(k => k.json())
}

export const getCampusPdfs = async (campus, page) => {
  return await fetch(`${phpurl}/pdfs.php/?campus=${campus}&page=${page}`)
    .then(k => k.json())
}

export const delPdf = async (id) => {
  await fetch(`${phpurl}/pdfs.php/?id=${id}`, {
    method: 'DELETE'
  })
}

export const getBasePdfs = async (page) => {
  return await fetch(`${phpurl}/bases.php/?page=${page}`)
    .then(k => k.json())
}

export const delBase = async (id) => {
  await fetch(`${phpurl}/bases.php/?id=${id}`, {
    method: 'DELETE'
  })
}