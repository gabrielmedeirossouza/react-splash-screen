import { useEffect, useRef } from "react"
import { useRecoilState } from "recoil"
import { Player, IPlayer } from "../../global/Player"
import { splashScreenState, ESplashScreenState } from './store/splashScreenState'
import { Container } from './styles'

export type TAnimation = {
  name: string,
  path: string;
  speed?: number;
  transitionInFrames: [number, number];
  waitingScreenLoadFrame: number;
  transitionOutFrames: [number, number];
}

interface IProps {
  isScreenLoaded: boolean;
  animation: TAnimation;
}

export function SplashScreen({ isScreenLoaded, animation }: IProps) {
  const [splashScreen, setSplashScreen] = useRecoilState(splashScreenState)
  const isStarted = useRef(false)
  const playerRef = useRef<IPlayer>(null)
  const player = playerRef.current

  useEffect(() => {
    actionsManager()

    player?.addEventListener('complete', onComplete)

    return () => player?.removeEventListener('complete', onComplete)
  }, [player, isScreenLoaded, splashScreen])

  useEffect(initialState, [player?.isLoaded])

  function initialState() {
    if (!player?.isLoaded) return

    player.setSpeed(animation.speed || 1)
  }

  function actionsManager() {
    if (splashScreen === ESplashScreenState.TRANSITION_IN && !isStarted.current) {
      isStarted.current = true
      player?.playSegments(animation.transitionInFrames, true)
    }

    if (splashScreen === ESplashScreenState.WAITING_SCREEN_LOAD) {
      player?.playSegments([animation.waitingScreenLoadFrame, animation.waitingScreenLoadFrame], true)
    }

    if (splashScreen === ESplashScreenState.TRANSITION_OUT) {
      player?.playSegments(animation.transitionOutFrames, true)
    }

    if (splashScreen === ESplashScreenState.FINISHED) {
      isStarted.current = false
      player?.goToAndStop(0, true)
    }
  }

  function onComplete() {
    if (splashScreen === ESplashScreenState.TRANSITION_IN) {
      setSplashScreen(ESplashScreenState.WAITING_SCREEN_LOAD)
    }

    if (splashScreen === ESplashScreenState.WAITING_SCREEN_LOAD && isScreenLoaded) {
      setSplashScreen(ESplashScreenState.TRANSITION_OUT)
    }

    if (splashScreen === ESplashScreenState.TRANSITION_OUT) {
      setSplashScreen(ESplashScreenState.FINISHED)
    }

  }

  return (
    <Container show={splashScreen !== ESplashScreenState.FINISHED}>
      <Player
        ref={playerRef}
        path={animation.path}
        config={{
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
      />
    </Container>
  )
}
