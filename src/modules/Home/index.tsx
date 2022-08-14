import { useEffect } from "react"
import { useNavigate } from "../../components/shared/SplashScreen/hooks/useNavigate"
import { withSplashScreen } from "../../components/shared/SplashScreen/HOC/withSplashScreen"

export const Home = withSplashScreen(({ manualLoad }) => {
  const navigate = useNavigate()
  const load = manualLoad()

  useEffect(() => {
    setTimeout(() => {
      load()
    }, 2500)
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("/about")}>Ir para Sobre</button>
    </div>
  )
})
