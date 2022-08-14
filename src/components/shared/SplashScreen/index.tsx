import { useEffect, useRef, useState } from "react"
import { useRecoilState } from "recoil"
import { Player } from '@lottiefiles/react-lottie-player';
import { splashScreenState, ESplashScreenState } from './store/splashScreenState'
import styled from "styled-components";

// "https://assets3.lottiefiles.com/private_files/lf30_k9zqevoo.json" - bird / explosion / feather
// "https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"

interface IContainerProps {
  showSplashScreen: boolean
}

const Container = styled.div<IContainerProps>`
  position: fixed;
  display: ${props => props.showSplashScreen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

interface IProps {
  isScreenLoaded: boolean
}

export function SplashScreen({ isScreenLoaded }: IProps) {
  const playerRef = useRef<Player>(null)
  const animationName = useRef('')
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false)
  const [splashScreen, setSplashScreen] = useRecoilState(splashScreenState)

  const play = (name: string) => {
    animationName.current = name
    playerRef.current?.state?.instance?.goToAndPlay(animationName.current, true)
  }

  const onFrameChange = () => {
    if (!playerRef.current) return

    const player = playerRef.current.state.instance
    const frame = Math.round(player?.currentFrame ?? 0)


    if (frame === 21 && splashScreen !== ESplashScreenState.WAITING_SCREEN_LOAD) {
      setSplashScreen(ESplashScreenState.WAITING_SCREEN_LOAD)
    }

    if (animationName.current === 'explosion' && frame === 10) {
      player?.stop()
      setSplashScreen(ESplashScreenState.FINISHED)
    }
  }

  useEffect(() => {
    const canTransitionOutAnimation =
      playerRef.current &&
      isScreenLoaded &&
      splashScreen === ESplashScreenState.WAITING_SCREEN_LOAD

    if (!canTransitionOutAnimation) return

    const player = playerRef.current.state.instance

    player?.loop && (player.loop = false)
    play('explosion')
  }, [isScreenLoaded, splashScreen])

  useEffect(() => {
    const canTransitionInAnimation =
      playerRef.current &&
      isAnimationLoaded &&
      splashScreen === ESplashScreenState.TRANSITION_IN

    if (!canTransitionInAnimation) return

    const player = playerRef.current.state.instance

    player?.loop && (player.loop = true)
    play('bird')
  }, [splashScreen, isAnimationLoaded])

  return (
    <Container showSplashScreen={splashScreen !== ESplashScreenState.FINISHED}>
      <Player
        ref={playerRef}
        src="https://assets3.lottiefiles.com/private_files/lf30_k9zqevoo.json"
        style={{width: '100%', height: '100%'}}
        onEvent={(event: string) => {
          if (event === 'load') {
            setIsAnimationLoaded(true)
          }

          if (event === 'frame') {
            onFrameChange()
          }
        }}
      />
    </Container>
  )
}
