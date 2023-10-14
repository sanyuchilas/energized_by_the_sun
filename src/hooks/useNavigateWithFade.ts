import {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";

export const useNavigateWithFade = (): [(routes: string) => void, boolean] => {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);
  
  const navigateWithFade = useCallback((route: string) => {
    setTimeout(() => {
      navigate(route);
      setFade(false);
    }, 300);

    setFade(true);
  }, [navigate]);

  return [navigateWithFade, fade];
}