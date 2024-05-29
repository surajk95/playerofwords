import { create } from "zustand";
import createDictionary from "dictionary-trie";

interface ScoreState {
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
}

export const useScoreStore = create<ScoreState>((set, get) => ({
  score: 0,
  speed: 0,
  suffix: "tion",
  error: null,
  enteredWords: {},
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  resetState: () => {
    set({ score: 0, speed: 0 });
  },
  setSuffix: (val) => {
    get().resetState();
    set(() => ({ suffix: val }));
  },
  dictionary: [],
  initDictionary: async () => {
    const words = (await import(`./words_dictionary.json`)).default;
    console.log(`imported`, words);
    set({ dictionary: createDictionary(Object.keys(words)) });
  },
  startTime: null,

  validate: (val) => {
    const suffix = get().suffix;
    const enteredWords = get().enteredWords;
    if (!val.endsWith(suffix)) {
      set({ error: `Word does not end with ${suffix}.` });
    } else if (enteredWords[val]) {
      set({ error: "You have already typed that." });
    } else {
      const hasWord = get().dictionary.includes(val);
      if (hasWord) {
        console.log(`correct`);
        const startTime = get().startTime;
        let score = get().score;
        let speed = 0;
        if (startTime) {
          let endTime = new Date();
          let timeDiff = endTime.getTime() - startTime.getTime(); //in ms
          //Strip the ms, convert to minutes.
          let timeDiffInMinutes = timeDiff / (1000 * 60);
          speed = Math.round(score / timeDiffInMinutes);
          console.log(`speed`, timeDiff, timeDiffInMinutes, speed);
        }
        set((state) => ({
          startTime: new Date(),
          speed,
          error: null,
          score: state.score + 1,
          enteredWords: { ...enteredWords, [val]: 1 },
        }));
        return true;
      } else {
        set({ error: "Not an English word." });
      }
    }
    return false;
  },
}));
