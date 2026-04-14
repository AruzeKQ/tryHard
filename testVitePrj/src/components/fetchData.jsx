import { useEffect, useState } from "react"

export default function WeatherLoad() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const apiKey = "";
                const city = "HaNoi";
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

                const data = await response.json();

                setWeatherData(data);
                setLoading(false);
            } catch (error) {
                console.log("Lỗi khi lấy data về!!!");
                setLoading(false);
            }
        }


        fetchWeather();
    }, [])


    if (loading) {
        return <h2>Đang lấy dữ liệu về thành phố ...</h2>;
    }
    return (
        <div>
            <h2>Thời tiết tại {weatherData.name}</h2>
            <p>Nhiệt độ hiện tại: <strong>{weatherData.main.temp}°C</strong></p>
            <p>Trạng thái: {weatherData.weather[0].description}</p>
        </div >
    )
}
