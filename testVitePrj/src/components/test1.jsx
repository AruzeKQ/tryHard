import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const mockData = [
    {
        id: "bike-01",
        name: "xe đạp địa hình",
        price: "500.000",
        color: "đen"
    },
    {
        id: "bike-02",
        name: "xe đạp skibidi",
        price: "1.500.000",
        color: "hồng"
    },
    {
        id: "bike-03",
        name: "xe đạp độ",
        price: "2.500.000",
        color: "vàng"
    }
]

export default function Test1({ id }) {

    // const { id } = useParams();

    const product = mockData.find((item) => item.id === id)

    if (!product) {
        return (
            <div style={{ padding: '20px' }}>
                <h2>Không tìm thấy chiếc xe này!</h2>
                <Link to="/products">Quay lại danh sách</Link>
            </div>
        );
    }

    return (
        <>
            <h1>Tên: {product.name}</h1>
            <span>Giá: {product.price}</span>
        </>
    )
}