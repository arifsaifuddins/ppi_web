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
  window.location.assign('/admin')
}

export const getAdmins = async () => {
  return await fetch(`${nodeurl}/admin/get`)
    .then(k => k.json())
}

export const delAdmins = async (id) => {
  await fetch(`${nodeurl}/admin/delete/${id}`, {
    method: 'DELETE'
  })
  window.location.assign('/admin')
}

export const getAdmin = async () => {
  return await fetch(`${nodeurl}/admin/admin/${localStorage.getItem('id_admin')}`)
    .then(k => k.json())
}

export const getVismiss = async () => {
  return await fetch(`${nodeurl}/mission/get`)
    .then(k => k.json())
}

export const getPres = async () => {
  return await fetch(`${nodeurl}/president/get`)
    .then(k => k.json())
}

export const getcoPres = async () => {
  return await fetch(`${nodeurl}/copresident/get`)
    .then(k => k.json())
}

export const getFAQs = async () => {
  return await fetch(`${nodeurl}/faqs/get`)
    .then(k => k.json())
}

export const getSections = async (category) => {
  return await fetch(`${nodeurl}/organize/get/category/${category}`)
    .then(k => k.json())
}

export const getSection = async (id) => {
  return await fetch(`${nodeurl}/organize/get/${id}`)
    .then(k => k.json())
}

export const getBlogs = async (page = 0) => {
  return await fetch(`${phpurl}/gets.php/?page=${page}`)
    .then(k => k.json())
}

export const getBlogsCat = async (page = 0, category) => {
  return await fetch(`${phpurl}/gets.php/?category=${category}&page=${page}`)
    .then(k => k.json())
}

export const getBlogsAut = async (page = 0, author) => {
  return await fetch(`${phpurl}/gets.php/?author=${author}&page=${page}`)
    .then(k => k.json())
}

export const searchBlogsAut = async (page = 0, s) => {
  return await fetch(`${phpurl}/gets.php/?s=${s}&page=${page}`)
    .then(k => k.json())
}

export const blogsFav = async (favorite) => {
  return await fetch(`${phpurl}/gets.php/?favorite=${favorite}`)
    .then(k => k.json())
}

export const blogsDis = async (display) => {
  return await fetch(`${phpurl}/gets.php/?display=${display}`)
    .then(k => k.json())
}

export const getBlog = async (slug) => {
  return await fetch(`${phpurl}/gets.php/?slug=${slug}`)
    .then(k => k.json())
}

export const delBlogs = async (id) => {
  await fetch(`${phpurl}/create_del.php/?id=${id}`, {
    method: 'DELETE'
  })
  window.location.assign('/blogs')
}

export const delSecs = async (id) => {
  await fetch(`${nodeurl}/organize/delete/${id}`, {
    method: 'DELETE'
  })
  window.location.assign('/organizations')
}