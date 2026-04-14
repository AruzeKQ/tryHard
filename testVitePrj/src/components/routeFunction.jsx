import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
    return <h2>🏠 Trang chủ: Chào mừng đến với Cửa hàng Xe đạp!</h2>;
}

function Products() {
    return <h2>🚲 Danh sách xe đạp địa hình & xe đua</h2>;
}

function Cart() {
    return <h2>🛒 Giỏ hàng: Bạn chưa chọn chiếc xe nào.</h2>;
}

function NotFound() {
    return <h2 style={{ color: 'red' }}>404: Trang này không tồn tại bro ơi!</h2>;
}

export default function Navigation() {
    return (
        <BrowserRouter>
            <nav style={{ padding: '20px', background: '#f4f4f4', marginBottom: '20px' }}>
                <Link to="/" style={linkStyle}>Trang Chủ</Link>
                <Link to="/products" style={linkStyle}>Sản phẩm</Link>
                <Link to="/cart" style={linkStyle}>Giỏ hàng</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

const linkStyle = {
    marginRight: '15px',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#333'
};