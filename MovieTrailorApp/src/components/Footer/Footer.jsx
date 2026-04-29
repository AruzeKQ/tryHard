import { Link } from "react-router-dom";
import './Footer.css';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h2>🎬 Skibidi Film</h2>
                    <p>Xem phim mọi lúc, mọi nơi.</p>
                </div>

                <div className="footer-center">
                    <h4>Khám phá</h4>
                    <Link to="/trending">Xu hướng</Link>
                    <Link to="/top-rated">Phổ biến</Link>
                </div>

                <div className="footer-right">
                    <h4>Kết nối</h4>
                    <div className="socials">
                        <a href="https://www.facebook.com/artoria.kn">Facebook</a>
                        <a href="https://www.instagram.com/khai.quang0103/">Instagram</a>
                        <a href="https://github.com/AruzeKQ">GitHub</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                © 2026 Skibidi Film. All rights reserved.
            </div>
        </footer>
    );
}