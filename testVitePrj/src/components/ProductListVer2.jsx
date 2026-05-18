import React from 'react';
import useFetcher from './useFetch';


export default function ProductList() {
    const { data: info, loading, error } = useFetcher('https://api.sampleapis.com/avatar/info')

    const x = JSON.stringify(info)

    if (loading) return <h2> Đang tải đợi một chút </h2>

    if (error) return <h2> Lỗi rồi thằng ngu ơi =D</h2>

    console.log(x)

    return (
        <div>
            <ul>
                <h2>Info: </h2>
                {info && info.map((item) => {
                    return <li key={item.id}>{item.yearsAired}</li>
                })}
            </ul>
        </div>
    )
}