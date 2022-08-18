import { useEffect } from "react"
import { withSplashScreen } from "../../components/shared/SplashScreen/HOC/withSplashScreen"
import { useNavigate } from "../../components/shared/SplashScreen/hooks/useNavigate"
import { delay } from "../../utils/tests/delay"

export const Home = withSplashScreen(({ useManualLoad }) => {
  const load = useManualLoad()
  const navigate = useNavigate()

  useEffect(() => {
    delay(1000).then(() => {
      load()
    })
  } , [])

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("/about")}>Ir para About</button>
    </div>
  )
})
