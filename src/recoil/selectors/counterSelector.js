// src/recoil/selectors/counterSelector.js
import { selector } from "recoil";
import { recoilCounterAtom } from "../atoms/recoilCounterAtom";

export const doubleCounterSelector = selector({
  key: "doubleCounter",
  get: ({ get }) => get(recoilCounterAtom) * 2,
});
