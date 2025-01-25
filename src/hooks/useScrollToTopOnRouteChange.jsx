import { useEffect } from "react";
import { useLocation } from "react-router";

const useScrollToTopOnRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
};

export default useScrollToTopOnRouteChange;
