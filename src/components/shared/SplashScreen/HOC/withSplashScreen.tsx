import React, { useEffect, useRef } from "react";

interface IWithSplashScreenParentProps {
  onLoad: () => void;
}

interface IWithSplashScreenChildrenProps {
  useManualLoad: () => () => void;
}

// TODO: Olhar uma melhor forma de usar o load automatico e o manual (sem o timeout e sem o hook useManualLoad)

export function withSplashScreen(Component: React.ComponentType<IWithSplashScreenChildrenProps>) {
  return (hocProps: IWithSplashScreenParentProps) => {
    const isManualLoad = useRef(false)

    const useManualLoad = () => {
      isManualLoad.current = true

      const load = () => {
        isManualLoad.current = false
        hocProps.onLoad()
      }

      return load
    }

    useEffect(() => {
      setTimeout(() => {
        if (isManualLoad.current) return

        isManualLoad.current = true
        hocProps.onLoad();
      }, 15)
    }, [])

    return (
      <Component
        {...hocProps}
        useManualLoad={useManualLoad}
      />
    )
  }
}
