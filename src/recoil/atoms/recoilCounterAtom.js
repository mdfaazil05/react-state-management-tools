import { atom } from "recoil";

export const recoilCounterAtom = atom({
  key: "counterState",
  default: 0,
});
