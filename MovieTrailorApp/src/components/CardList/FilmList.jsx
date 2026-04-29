import FilmDetail from "../CardView/FilmDetail"

const films = [
    {
        id: 1,
        name: "The Boys",
        img: "https://phimmoir.fm/storage/images/the-boys-phan-5/the-boys-phan-5-thumb-1775624659696.webp",
        details: "Fiml skibidi",
        content: "lorem sara babi"
    },
    {
        id: 2,
        name: "Mật ngữ kỷ",
        img: "https://phimmoir.fm/storage/images/mat-ngu-ky/mat-ngu-ky-thumb.webp",
        details: "Fiml skibidi",
        content: "lorem sara babi"
    },
    {
        id: 3,
        name: "Điều ước đoạt mạng",
        img: "https://phimmoir.fm/storage/images/dieu-uoc-doat-mang/dieu-uoc-doat-mang-thumb.webp",
        details: "Fiml skibidi",
        content: "lorem sara babi"
    },
    {
        id: 4,
        name: "Bác sĩ shin",
        img: "https://phimmoir.fm/storage/images/bac-si-shin/bac-si-shin-thumb.webp",
        details: "Fiml skibidi",
        content: "lorem sara babi"

    },
]


export default function FilmList() {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Phim Thịnh Hành</h2>

            <div style={style.gridContainer}>
                {films.map((movie) => (
                    <FilmDetail key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

const style = {
    // Container chia cột
    gridContainer: {
        display: 'grid',
        // Tự động chia cột, mỗi cột tối thiểu 250px
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px', // Khoảng cách giữa các thẻ
        maxWidth: '1200px',
        margin: '0 auto' // Căn giữa toàn bộ danh sách
    }

}