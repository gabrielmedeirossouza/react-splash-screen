import { atom } from "recoil";

type TNavigateState = string

export const navigateState = atom<TNavigateState>({
  key: "navigateState",
  default: "/"
})
