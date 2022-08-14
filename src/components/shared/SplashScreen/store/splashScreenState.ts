import { atom } from "recoil";

export enum ESplashScreenState {
  TRANSITION_IN,
  TRANSITION_OUT,
  WAITING_SCREEN_LOAD,
  FINISHED
}

export const splashScreenState = atom<ESplashScreenState>({
  key: 'splashScreenState',
  default: ESplashScreenState.FINISHED,
});
