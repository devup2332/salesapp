import { create } from "zustand";

type State = {
  theme: string;
};

type Action = {
  setTheme: (theme: string) => void;
};
window.matchMedia("(prefers-color-scheme: dark)");
export const useStore = create<State & Action>((set) => ({
	theme: "light",
	setTheme: (theme: string) => set(() => ({ theme })),
}));
