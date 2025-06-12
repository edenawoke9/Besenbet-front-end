"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, Filter, ChevronDown } from "lucide-react"
import Header from "@/components/header"

interface Product {
  id: number
  name: string
  price: number
  rating: number
  reviews: number
  image: string
  category: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Wooden Cross Necklace",
    price: 29.99,
    rating: 5,
    reviews: 124,
    image: "/products/wooden-cross-necklace.jpg",
    category: "Jewelry",
  },
  {
    id: 2,
    name: "Scripture Journal",
    price: 19.99,
    rating: 4,
    reviews: 86,
    image: "/products/scripture-journal.jpg",
    category: "Books",
  },
  {
    id: 3,
    name: "Faith Over Fear T-Shirt",
    price: 24.99,
    rating: 5,
    reviews: 52,
    image: "/products/faith-over-fear-shirt.jpg",
    category: "Apparel",
  },
  {
    id: 4,
    name: "Olive Wood Rosary",
    price: 39.99,
    rating: 5,
    reviews: 37,
    image: "/products/olive-wood-rosary.jpg",
    category: "Jewelry",
  },
  {
    id: 5,
    name: "Devotional Bible",
    price: 34.99,
    rating: 5,
    reviews: 95,
    image: "/products/bible.jpg",
    category: "Books",
  },
  {
    id: 6,
    name: "Cross Wall Decor",
    price: 49.99,
    rating: 4,
    reviews: 28,
    image: "/products/cross-decor.jpg",
    category: "Home Decor",
  },
  {
    id: 7,
    name: "Prayer Journal Set",
    price: 29.99,
    rating: 5,
    reviews: 64,
    image: "/products/prayer-journal.jpg",
    category: "Books",
  },
  {
    id: 8,
    name: "Christian Quote Canvas",
    price: 44.99,
    rating: 4,
    reviews: 42,
    image: "/products/quote-canvas.jpg",
    category: "Home Decor",
  },
]

const categories = ["All", "Books", "Jewelry", "Apparel", "Home Decor"]
const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Most Popular", value: "popular" },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProducts = products.filter((product) =>
    selectedCategory === "All" ? true : product.category === selectedCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price_asc":
        return a.price - b.price
      case "price_desc":
        return b.price - a.price
      case "popular":
        return b.reviews - a.reviews
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-[#B5C99A]/20 to-transparent">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#718355] mb-4"
          >
            Shop Our Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Discover our curated selection of faith-inspired products to enrich your spiritual journey
          </motion.p>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {/* Filters and Sort */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-[#718355] text-white"
                      : "bg-white text-gray-600 hover:bg-[#718355] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 hover:text-[#718355] transition-colors"
              >
                <Filter className="h-4 w-4" />
                Sort by
                <ChevronDown className="h-4 w-4" />
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value)
                        setIsFilterOpen(false)
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        sortBy === option.value
                          ? "text-[#718355] bg-[#718355]/10"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/product/${product.id}`}
                  className="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-[#718355] group-hover:underline mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < product.rating
                                ? "fill-[#97A97C] text-[#97A97C]"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                    </div>
                    <p className="text-xl font-bold text-[#718355]">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 