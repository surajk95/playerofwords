import { create } from "zustand";
import createDictionary from "dictionary-trie";

interface ScoreState {
  score: number;
  suffix: string;
  increaseScore: () => void;
  resetScore: () => void;
  setSuffix: (val: string) => void;
  dictionary: string[];
  initDictionary: () => void;
  validate: (val: string) => void;
}

export const useScoreStore = create<ScoreState>((set, get) => ({
  score: 0,
  suffix: "tion",
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),
  setSuffix: (val) => set(() => ({ suffix: val })),
  dictionary: [],
  initDictionary: async () => {
    const words = (await import(`./words_dictionary.json`)).default;
    console.log(`imported`, words);
    set({ dictionary: createDictionary(Object.keys(words)) });
  },
  validate: (val) => {
    const hasWord = get().dictionary.includes(val);
    console.log(`has word`, hasWord);
  },
}));
