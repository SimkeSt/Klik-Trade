import { createContext } from "react";

export const colors = {
    primary: "primary",
    blue: "blue",
    green: "green",
}
export const themes = {
    dark: "dark",
    light: "white-content",
    system: "system"
};

export const AppearanceContext = createContext({
    color: colors.blue,
    theme: themes.dark,
    changeColor: () => {},
    changeTheme: () => {},
});