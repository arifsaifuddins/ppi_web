import { confirmAlert } from "react-confirm-alert";
import { delAdmins, delBase, delBlogs, delCategories, delFaqs, delPdf, delYear } from "../../Gets";

export const ConfirmAlert = (id, each) => {

  confirmAlert({
    title: 'Konfirmasi hapus',
    message: 'Apakah anda yakin ingin menghapus ini?',
    buttons: [
      {
        label: 'Yakin',
        onClick: () => {
          if (each == 'kategori') {
            window.history.back()
            delCategories(id)
          }

          if (each == 'base') {
            window.history.back()
            delBase(id)
          }

          if (each == 'admin') {
            window.history.back()
            delAdmins(id)
          }

          if (each == 'angkatan') {
            window.history.back()
            delYear(id)
          }

          if (each == 'artikel') {
            window.history.back()
            delBlogs(id)
          }

          if (each == 'tesis') {
            window.history.back()
            delPdf(id)
          }

          if (each == 'faqs') {
            window.history.back()
            delFaqs(id)
          }
        }
      },
      {
        label: 'Batal',
        onClick: () => null
      }
    ]
  });
};