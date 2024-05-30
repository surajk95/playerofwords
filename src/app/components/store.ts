import { create } from "zustand";
import createDictionary from "dictionary-trie";

interface ScoreState {
  loading: boolean,
  score: number;
  speed: number;
  suffix: string;
  error: string | null;
  enteredWords: {
    [key: string]: number;
  };
  increaseScore: () => void;
  resetState: () => void;
  setSuffix: (val: string) => void;
  dictionary: string[];
  initDictionary: () => void;
  validate: (val: string) => boolean;
  startTime: Date | null;
  totalTimeDiff: 0;
}

export const useScoreStore = create<ScoreState>((set, get) => ({
  loading: false,
  score: 0,
  speed: 0,
  suffix: "tion",
  error: null,
  enteredWords: {},
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  resetState: () => {
    set({ score: 0, speed: 0, startTime: null, enteredWords: {}, error: null });
  },
  setSuffix: (val) => {
    get().resetState();
    set(() => ({ suffix: val }));
  },
  dictionary: [],
  initDictionary: async () => {
    set({ loading: true })
    const words = (await import(`./words_dictionary.json`)).default;
    set({ loading: false, dictionary: createDictionary(Object.keys(words)), startTime: new Date() });
  },
  startTime: null,
  totalTimeDiff: 0,
  validate: (val) => {
    const suffix = get().suffix;
    const enteredWords = get().enteredWords;
    if (!val.endsWith(suffix)) {
      set({ error: `Word does not end with ${suffix}.` });
    } else if (enteredWords[val]) {
      set({ error: `You have already typed ${val}.` });
      return true;
    } else {
      const hasWord = get().dictionary.includes(val);
      if (hasWord) {
        const startTime = get().startTime;
        let score = get().score;
        let totalTimeDiff = get().totalTimeDiff;
        let speed = 0;
        if (startTime) {
          let endTime = new Date();
          let timeDiff = endTime.getTime() - startTime.getTime(); // in ms
          // Strip the ms, convert to minutes.
          let timeDiffInMinutes = timeDiff / (1000 * 60);
          totalTimeDiff += timeDiffInMinutes
          speed = Math.round((score + 1) / totalTimeDiff);
        }
        set((state) => ({
          startTime: new Date(),
          speed,
          error: null,
          score: state.score + 1,
          enteredWords: { ...enteredWords, [val]: 1 },
          totalTimeDiff,
        }));
        return true;
      } else {
        set({ error: "Not an English word." });
      }
    }
    return false;
  },
}));
