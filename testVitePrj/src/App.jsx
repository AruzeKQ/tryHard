import { useState, createContext, useContext } from "react"
import ButtonTheme from "./components/contextApi"
import { ThemeContext } from "./components/contextTheme";
export default function App() {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(prevTheme => {
            prevTheme === 'light' ? 'dark' : 'light'
        });
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div style={{
                background: theme === 'light' ? '#fff' : '#222',
                color: theme === 'light' ? '#000' : '#fff',
                height: 1000,
            }}>
                <ButtonTheme />
            </div>
        </ThemeContext.Provider>
    )
}