import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// export function useTheme() {
//   const [isDark, setIsDark] = useContext(ThemeContext);

//   return [isDark, setIsDark];
// }

//you can write single line  of code
export const useTheme = () => useContext(ThemeContext);
