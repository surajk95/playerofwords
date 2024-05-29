import { create } from "zustand";

interface ScoreState {
  score: number;
  suffix: string;
  increaseScore: () => void;
  resetScore: () => void;
  setSuffix: (val: string) => void;
}

export const useScoreStore = create<ScoreState>((set) => ({
  score: 0,
  suffix: "tion",
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),
  setSuffix: (val) => set((state) => ({ suffix: val })),
}));
