import { useState, createContext, useContext } from 'react';
import { ThemeContext } from './contextTheme';

function ButtonTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button
            onClick={toggleTheme}
            style={{
                background: theme === 'light' ? '#333' : '#fff',
                color: theme === 'light' ? '#fff' : '#333',
            }
            }
        >Chuyển sang chế độ {theme == 'light' ? 'tối' : 'sáng'}</button>
    );
}

export default ButtonTheme;