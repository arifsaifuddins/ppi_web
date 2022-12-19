import { confirmAlert } from "react-confirm-alert"

const Copy = () => {
  const Info = (msgs) => {
    confirmAlert({
      message: msgs,
      buttons: [
        {
          label: 'Oke',
          onClick: () => {
            null
          }
        }
      ]
    })
  }

  try {
    const dummy = document.createElement('input')

    document.body.appendChild(dummy)
    dummy.value = window.location.href
    dummy.select()
    const successful = document.execCommand('copy')
    const msg = successful ? 'URL berhasil disalin' : 'URL gagal disalin'
    document.body.removeChild(dummy)
    Info(msg)
  } catch (err) {
    Info('Oops, URL ada error')
  }
}

export default Copy
