import React, { useEffect, useRef } from "react";

interface IWithSplashScreenParentProps {
  onLoad: () => void;
}

interface IWithSplashScreenChildrenProps {
  manualLoad: () => () => void;
}

export function withSplashScreen(Component: React.ComponentType<IWithSplashScreenChildrenProps>) {
  return (hocProps: IWithSplashScreenParentProps) => {
    const isManualLoad = useRef(false)

    const manualLoad = () => {
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
      }, 10)
    }, [])

    return (
      <Component
        {...hocProps}
        manualLoad={manualLoad}
      />
    )
  }
}
