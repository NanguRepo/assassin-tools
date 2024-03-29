import { writable } from "svelte/store";
import { browser } from "$app/env";

const getString = (item: string, fallback: string): string => {
    try {
        return localStorage.getItem(item) || fallback;
    } catch {
        return fallback;
    }
};
export type item = {
    name: string;
    value: string;
    demand: string;
    rarity: string;
    exoticvalue: number;
    obtain: string;
    origin: string;
    amount: number;
    attr: {
        favorite: boolean;
        trading: boolean;
    };
};
export const defaultItem: item = {
    name: "",
    value: "",
    demand: "",
    rarity: "",
    exoticvalue: 0,
    obtain: "",
    origin: "",
    amount: 0,
    attr: {
        favorite: false,
        trading: false,
    },
};
export interface tradeContainer {
    top: item[];
    bottom: item[];
}
const tradeObj: tradeContainer = {
    top: [],
    bottom: [],
};

export const code = writable(getString("code", ""));
export const password = writable(getString("password", ""));
export const passwordCorrect = writable(false);
export const inventory = writable({
    items: [defaultItem],
    meta: { private: false },
});
export const trade = writable(tradeObj);
export const selectedRow = writable("top");
export const warn = writable(getString("warn", "true") == "true");
export const codeDialog = writable(false);
export const tutorialStep = writable(parseInt(getString("tutorialStep", "0")));

code.subscribe((value) => {
    if (browser) {
        localStorage.setItem("code", value);
    }
});
password.subscribe((value) => {
    if (browser) {
        localStorage.setItem("password", value);
    }
});
warn.subscribe((value) => {
    if (browser) {
        localStorage.setItem("warn", value == true ? "true" : "false");
    }
});
