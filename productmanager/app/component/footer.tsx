import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Cột 1: Giới thiệu */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">MyShop</h2>
          <p className="text-sm leading-6">
            MyShop là nền tảng mua sắm trực tuyến cung cấp các sản phẩm chất lượng 
            với giá tốt. Chúng tôi cam kết mang đến trải nghiệm mua hàng nhanh chóng 
            và tiện lợi.
          </p>
        </div>

        {/* Cột 2: Liên kết */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Liên kết</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Trang chủ</Link></li>
            <li><Link href="/products" className="hover:text-white">Sản phẩm</Link></li>
            <li><Link href="/about" className="hover:text-white">Giới thiệu</Link></li>
            <li><Link href="/contact" className="hover:text-white">Liên hệ</Link></li>
          </ul>
        </div>

        {/* Cột 3: Liên hệ */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Liên hệ</h2>
          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5" />
              TP.HCM, Việt Nam
            </li>

            <li className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5" />
              0123 456 789
            </li>

            <li className="flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5" />
              support@myshop.com
            </li>
          </ul>

          {/* Social */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2026 MyShop. All rights reserved.
      </div>
    </footer>
  );
}