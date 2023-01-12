import { createContext } from "react";

export const themes = {
    dark: "dark",
    light: "white-content",
    system: "system"
};

export const AppearanceContext = createContext({
    theme: themes.dark,
    changeTheme: () => {},
});