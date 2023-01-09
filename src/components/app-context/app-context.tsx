import { createContext } from "react";

export const AppContext = createContext<{a: number, setA: (num: number) => void} | null>(null);