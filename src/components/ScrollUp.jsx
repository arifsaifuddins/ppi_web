import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollUp() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

}

export default ScrollUp;