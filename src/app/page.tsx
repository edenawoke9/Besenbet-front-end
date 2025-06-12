'use client'
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ShoppingBag, Star } from "lucide-react"
import HomeImageList from "@/components/ui/imagecard"
import Header from "@/components/header"
import { addToCart } from "./cart/cart"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { StackedTestimonials } from "@/components/stacked-testimonials"
import { useState, useEffect } from 'react'

const line = [
  "Blessed Goods for a Faithful Life - Where Quality Meets Christian Values",
  "Inspired Shopping for the Soul - Glorifying God in Every Purchase",
  "Your Christian Marketplace - Serving with Love, Excellence, and Purpose"
]

export default function Home() {
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [tagline, setTagline] = useState(line[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % line.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setTagline(line[taglineIndex])
  }, [taglineIndex])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-[#B5C99A]/20 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                key={tagline}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-[#718355] leading-tight mb-6"
              >
                {tagline}
              </motion.h1>
              <p className="text-gray-600 text-lg mb-8">
                Discover our curated collection of faith-inspired products that bring beauty and meaning to your spiritual journey.
              </p>
              <Button
                className="bg-[#718355] hover:bg-[#5d6c46] text-white px-8 py-3 rounded-full text-lg"
                asChild
              >
                <Link href="/shop">Shop Now</Link>
              </Button>
            </div>
            <div className="flex-1">
              <HomeImageList />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#718355] mb-4">
              Shop by Category
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Browse our curated collections of faith-inspired products
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/category/${category.slug}`}
                  className="group relative overflow-hidden rounded-lg shadow-lg block"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-[#B5C99A]/10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#718355] mb-4">
              Featured Products
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Our most popular faith-inspired items
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#718355] mb-4">
              What Our Customers Say
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Read testimonials from our blessed community
            </p>
          </motion.div>
          <StackedTestimonials testimonials={testimonials} />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-[#718355] text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg mb-8 text-white/90">
              Subscribe to receive updates on new products, special offers, and spiritual inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full text-gray-900 w-full sm:w-96"
              />
              <Button className="bg-white text-[#718355] hover:bg-gray-100 px-8 py-3 rounded-full">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const categories = [
  {
    name: "Bibles & Books",
    slug: "bibles-books",
    image: "/categories/bibles-books.jpg",
  },
  {
    name: "Jewelry",
    slug: "jewelry",
    image: "/categories/jewelry.jpg",
  },
  {
    name: "Home Decor",
    slug: "home-decor",
    image: "/categories/home-decor.jpg",
  },
  {
    name: "Apparel",
    slug: "apparel",
    image: "/categories/apparel.jpg",
  },
]

const products = [
  {
    id: 1,
    name: "Wooden Cross Necklace",
    price: 29.99,
    rating: 5,
    reviews: 124,
    image: "/products/wooden-cross-necklace.jpg",
  },
  {
    id: 2,
    name: "Scripture Journal",
    price: 19.99,
    rating: 4,
    reviews: 86,
    image: "/products/scripture-journal.jpg",
  },
  {
    id: 3,
    name: "Faith Over Fear T-Shirt",
    price: 24.99,
    rating: 5,
    reviews: 52,
    image: "/products/faith-over-fear-shirt.jpg",
  },
  {
    id: 4,
    name: "Olive Wood Rosary",
    price: 39.99,
    rating: 5,
    reviews: 37,
    image: "/products/olive-wood-rosary.jpg",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "The Scripture Journal has been a blessing in my daily devotional time. The quality is exceptional and the prompts help me dive deeper into God's word.",
    avatar: "/avatars/sarah.jpg",
    date: "March 15, 2024",
  },
  {
    name: "Michael Thomas",
    rating: 5,
    text: "I purchased the wooden cross necklace as a gift for my daughter's confirmation. She absolutely loves it and hasn't taken it off since!",
    avatar: "/avatars/michael.jpg",
    date: "February 28, 2024",
  },
  {
    name: "Rebecca Wilson",
    rating: 4,
    text: "The Faith Over Fear t-shirt is not only comfortable but also sparks great conversations about my faith. I've already ordered another one!",
    avatar: "/avatars/rebecca.jpg",
    date: "April 2, 2024",
  },
  {
    name: "David Martinez",
    rating: 5,
    text: "The olive wood rosary is beautifully crafted and has become an important part of my prayer life. The wood has a wonderful texture and the craftsmanship is excellent.",
    avatar: "/avatars/david.jpg",
    date: "April 10, 2024",
  },
  {
    name: "Jennifer Adams",
    rating: 5,
    text: "I bought several items as gifts for my church group, and everyone was thrilled with the quality. The customer service was also exceptional when I needed to make a change to my order.",
    avatar: "/avatars/jennifer.jpg",
    date: "March 22, 2024",
  },
]
