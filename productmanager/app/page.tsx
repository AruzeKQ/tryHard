import ProductCard from "./component/ProductCard";
import { Product } from "./types/product";

async function getProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/products');
  
  if (!res.ok) {
    throw new Error('Không thể tải dữ liệu');
  }
  
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  const productHot = products.filter((product: Product) => product.hot === 1);
  const productTourTrongNuoc = products.filter((product: Product) => product.categoryId.name === "Du Lịch Trong Nước");
  const productTourNuocNgoai = products.filter((product: Product) => product.categoryId.name === "Du Lịch Quốc Tế");

  console.log("productHot", productHot);
  console.log("productTourTrongNuoc", productTourTrongNuoc);
  console.log("productTourNuocNgoai", productTourNuocNgoai);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Tour nổi bật */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-l-4 border-red-500 pl-4">
            🔥 Tour nổi bật
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productHot && productHot.map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>

        {/* Tour trong nước */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-l-4 border-green-500 pl-4">
            🇻🇳 Tour trong nước
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productTourTrongNuoc.map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>

        {/* Tour nước ngoài */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-l-4 border-blue-500 pl-4">
            ✈️ Tour nước ngoài
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productTourNuocNgoai.slice(0, 4).map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}




