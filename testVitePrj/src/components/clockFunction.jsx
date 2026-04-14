import { useState, useEffect } from "react";

// 1. COMPONENT CON (Cái Đồng Hồ)
function Timer() {
    useEffect(() => {
        // Khởi động đồng hồ đếm giây (Chạy ngầm)
        const myTimer = setInterval(() => {
            console.log("Đồng hồ đang chạy: Tích... tắc...");
        }, 1000);

        // HÀM DỌN DẸP: Sẽ tự động chạy khi Component Timer này bị hủy
        return () => {
            clearInterval(myTimer); // Tắt bộ đếm đi
            console.log("Đã đập nát cái đồng hồ! Dọn dẹp xong.");
        };
    }, []); // Mảng rỗng: Chỉ chạy 1 lần khi Đồng hồ hiện lên

    return <h3>Tôi là cái Đồng Hồ đây! Mở Console lên mà xem log.</h3>;
}

export default function ClockTimer() {
    // Ban đầu cho đồng hồ hiện (true)
    const [showTimer, setShowTimer] = useState(true);

    return (
        <div>
            <button onClick={() => setShowTimer(!showTimer)}>
                {showTimer ? "Tắt Đồng Hồ (Hủy Component)" : "Bật Đồng Hồ"}
            </button>

            <hr />

            {/* Render có điều kiện: Nếu false, Timer bị gạch bỏ hoàn toàn khỏi DOM */}
            {showTimer && <Timer />}
        </div>
    );
}