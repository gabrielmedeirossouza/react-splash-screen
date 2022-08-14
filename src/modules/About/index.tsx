import { withSplashScreen } from "../../components/shared/SplashScreen/HOC/withSplashScreen"
import { useNavigate } from "../../components/shared/SplashScreen/hooks/useNavigate"

export const About = withSplashScreen(() => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>About</h1>
      <button onClick={() => navigate("/")}>Ir para Home</button>
    </div>
  )
})
