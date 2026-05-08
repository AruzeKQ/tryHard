
export default function FilmDetail(props) {
    return (
        console.log(props),
        <div style={styles.card}>
            <img src={props.img} alt={props.details} style={styles.image} />
            <div>
                <h4 style={styles.title}>{props.name}</h4>
                {/* <p style={styles.content}>{props.content}</p> */}
            </div>
        </div>
    )
}

const styles = {

    // Style cho Thẻ phim
    card: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        overflow: 'hidden', // Bo tròn góc thì phải có cái này để ảnh không bị tràn
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s ease', // Hiệu ứng mượt mà khi hover
        cursor: 'pointer',
    },

    image: {
        width: '100%',
        height: '350px',
        objectFit: 'cover', // Cắt cúp ảnh cho vừa khung mà không bị méo
        display: 'block'
    },

    content: {
        padding: '15px'
    },

    title: {
        margin: '10px 0 10px 0',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis', // Cắt chữ nếu tên phim quá dài (thêm ...)
        textAlign: 'center'
    },

    genre: {
        margin: '0 0 15px 0',
        color: '#777',
        fontSize: '14px'
    },

    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    rating: {
        fontWeight: 'bold',
        color: '#ff9800'
    },

    button: {
        backgroundColor: '#e50914', // Màu đỏ kiểu Netflix
        color: 'white',
        border: 'none',
        padding: '8px 15px',
        borderRadius: '4px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
};