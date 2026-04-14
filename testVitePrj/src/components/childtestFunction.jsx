export default function ChildTestFunction({ product, price, isAvailable }) {
  return (
    <div>
      <h1 style={{color: 'blue'}}>{product}</h1>
      <p>Giá: {price.toLocaleString('vi-VN')} VND</p>
      <p>Trang thai: {isAvailable ? 'Còn hàng' : 'Hết hàng'}</p>
      <button onClick={() => console.log('Da them vao gio hang!!!!')}>Mua Ngay</button>
    </div>
  );
}