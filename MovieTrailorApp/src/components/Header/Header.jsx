import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from '../Auth/Login';
import './Header.css';

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-left">
                <Link to="/" className="logo">🎬 Skibidi Film</Link>
            </div>

            <div className="header-center">
                <input type="text" placeholder="Tìm phim..." />
            </div>

            <nav className="header-right">
                <Link to="/trending">Xu hướng</Link>
                <Link to="/top-rated">Phổ biến</Link>
                <Link to="/login" className="btn-login">Đăng nhập</Link>
                <Link to="/register" className="btn-register">Đăng ký</Link>
            </nav>


        </header>
    );
}