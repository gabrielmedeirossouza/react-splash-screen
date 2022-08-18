import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import lottie, { AnimationConfigWithPath, AnimationItem } from "lottie-web";

import { Container } from './styles'

type TConfig = Omit<AnimationConfigWithPath<"svg">, "path" | "renderer" | "container">

interface IProps {
  path: string;
  config?: TConfig;
}

export interface IPlayer extends AnimationItem {}

export const Player = forwardRef(({ path, config }: IProps, ref) => {
  const playerRef = useRef<HTMLDivElement>(null)
  const [player, setPlayer] = useState<AnimationItem | null>(null)

  useEffect(createPlayer, [playerRef])

  useImperativeHandle(ref, () => player, [player])

  function createPlayer() {
    if (!playerRef.current) return

    const lottiePlayer = lottie.loadAnimation({
      ...config,
      container: playerRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path
    })

    setPlayer(lottiePlayer)
  }

  return <Container ref={playerRef} />
})
