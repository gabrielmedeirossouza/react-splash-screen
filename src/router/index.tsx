import { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { SplashScreen } from '../components/shared/SplashScreen'
import { ESplashScreenState, splashScreenState } from "../components/shared/SplashScreen/store/splashScreenState";
import { paths } from "./paths";

export function Router() {
  const splashScreen = useRecoilValue(splashScreenState)
  const [isScreenLoaded, setIsScreenLoaded] = useState(false);

  const onScreenLoad = () => {
    setIsScreenLoaded(true)
  }

  useEffect(() => {
    if (splashScreen === ESplashScreenState.TRANSITION_IN) {
      setIsScreenLoaded(false)
    }
  }, [splashScreen])

  return (
    <>
      <SplashScreen isScreenLoaded={isScreenLoaded} />
      <Suspense>
        <Routes>
          {paths.map(({ element: Element, ...props }) => (
            <Route {...props} element={<Element onLoad={onScreenLoad} />} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}
