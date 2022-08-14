import { useNavigate as useReactRouterDomNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { splashScreenState, ESplashScreenState } from '../store/splashScreenState'
import { navigateState } from '../store/navigateState'
import { useEffect } from 'react'

export function useNavigate() {
  const navigateReactRouterDom = useReactRouterDomNavigate();
  const [splashScreen, setSplashScreen] = useRecoilState(splashScreenState)
  const [navigate, setNavigate] = useRecoilState(navigateState)

  const goto = (path: string) => {
    setNavigate(path)
    startTransition()
  }

  const startTransition = () => {
    setSplashScreen(ESplashScreenState.TRANSITION_IN)
  }

  useEffect(() => {
    if (splashScreen !== ESplashScreenState.WAITING_SCREEN_LOAD) return

    navigateReactRouterDom(navigate)
  }, [splashScreen])

  return goto
}
