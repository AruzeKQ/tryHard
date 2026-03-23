"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyShop
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Search */}
        <div className="hidden md:flex items-center border rounded-lg px-2 py-1">
          <MagnifyingGlassIcon className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-2"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">

          {/* Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCartIcon className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              2
            </span>
          </Link>

          {/* User */}
          <div className="relative">
            <button onClick={() => setShowUserMenu(!showUserMenu)}>
              <UserCircleIcon className="w-6 h-6" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md">
                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                  Profile
                </Link>
                <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100">
                  Orders
                </Link>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-2">
          <Link href="/" className="block">Home</Link>
          <Link href="/products" className="block">Products</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/contact" className="block">Contact</Link>

          <div className="flex items-center border rounded-lg px-2 py-1 mt-2">
            <MagnifyingGlassIcon className="w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none px-2 w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}