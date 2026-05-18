// components/shop/CategoryNav.tsx
"use client";
import Link from "next/link";
import {
  Smartphone,
  Shirt,
  Home,
  BookOpen,
  Gamepad2,
  Bike,
  Sofa,
  Microwave,
  ShoppingBasket,
  Sparkles,
  Activity,
  Car,
  ChevronDown 
} from "lucide-react";

export default function CategoryNav() {
  const categories = [
    { name: "Electronics", icon: Smartphone },
    { name: "Fashion", icon: Shirt },
    { name: "Home & Kitchen", icon: Home },
    { name: "Books", icon: BookOpen },
    { name: "Toys", icon: Gamepad2 },
    { name: "Sports", icon: Bike },
    { name: "Furniture", icon: Sofa },
    { name: "Appliances", icon: Microwave },
    { name: "Groceries", icon: ShoppingBasket },
    { name: "Beauty", icon: Sparkles },
    { name: "Health", icon: Activity },
    { name: "Automotive", icon: Car },
    { name: "Gaming", icon: Gamepad2 },
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700 sticky top-16 z-40">
      <div className="max-w-8xl mx-auto px-4 flex items-center  justify-between">
        <button
        type="button"
        className="whitespace-nowrap text-slate-300 cursor-pointer flex items-center">
          <span>All</span>
          <ChevronDown className="size-4 opacity-80" />
          
        </button>
        <ul className="flex gap-6 overflow-x-auto py-3 text-sm scrollbar-hide select-none scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <li key={category.name}>
                <Link
                  href="#"
                  className="flex flex-col items-center gap-2 text-slate-300  hover:text-lime-400 whitespace-nowrap transition-colors"
                >
                  <Icon className="size-4" />
                  <span>{category.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
       <button
        type="button"
        className="whitespace-nowrap text-slate-300 cursor-pointer">
          <span className="font-semibold">A2Z_pay</span>
        </button>
               <button
        type="button"
        className=" border p-3 whitespace-nowrap text-amber-400 cursor-pointer rounded-xl">
          <span className="font-semibold">XYZ Offer</span>
        </button>
      </div>
    </nav>
  );
}
