import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" for instant scroll
    });
  }, [pathname]);

  return null;
}
