import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ShoppingBag, Star } from "lucide-react"
import HomeImageList from "@/components/ui/imagecard"
import Header from "@/components/header"
import { addToCart } from "./cart/cart"

import { Button } from "@/components/ui/button"

import { StackedTestimonials } from "@/components/stacked-testimonials"

export default function Home() {
  
  return (
    <div className="flex gap-10 w-screen flex-col  min-h-screen">
      <Header/>
      {/* Hero Section */}
      <section className="w-full   justify-between text-black  flex items-center bg-[#B5C99A]/20">
      <h1 className="mb-10 text-3xl font-extrabold">ሁሉም እምነት በአንድ ስፍራ!</h1>
      <div>
        <HomeImageList/>

      
    </div>


      </section>

      {/* Featured Categories */}
      <section className="w-full flex m-4 justify-center ">
        <div className="container ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#718355]">
                Shop by Category
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse our curated collections of faith-inspired products
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="h-[200px] w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#718355]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full flex  p-4 justify-center  bg-[#B5C99A]/10">
        <div className="container ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#718355]">
                Featured Products
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our most popular faith-inspired items
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-[#718355] group-hover:underline">{product.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating ? "fill-[#97A97C] text-[#97A97C]" : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="font-bold text-[#718355]">${product.price.toFixed(2)}</p>
                    <Button size="sm" className="bg-[#87986A] hover:bg-[#718355]" >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button className="bg-[#718355] hover:bg-[#87986A]">View All Products</Button>
          </div>
        </div>
      </section>

      {/* Testimonials - Now with Stacked Cards */}
      <section className="w-full flex justify-center">
        <div className="container ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#718355]">
                Customer Testimonials
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-12">
                See what our community has to say about our products
              </p>
            </div>
          </div>

          {/* Stacked Testimonials Component */}
          <StackedTestimonials testimonials={testimonials} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full flex pt-10 pb-10  justify-center  bg-[#718355]">
        <div className="container ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Join Our Community
              </h2>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Subscribe to receive updates, special offers, and spiritual inspiration
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="bg-white text-[#718355] hover:bg-gray-100">Subscribe</Button>
              </form>
              <p className="text-xs text-white/70">
                By subscribing, you agree to our terms and privacy policy. We'll never share your email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const categories = [
  {
    name: "Bibles & Books",
    slug: "bibles-books",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Jewelry",
    slug: "jewelry",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Home Decor",
    slug: "home-decor",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Apparel",
    slug: "apparel",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const products = [
  {
    id: 1,
    name: "Wooden Cross Necklace",
    price: 29.99,
    rating: 5,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Scripture Journal",
    price: 19.99,
    rating: 4,
    reviews: 86,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Faith Over Fear T-Shirt",
    price: 24.99,
    rating: 5,
    reviews: 52,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Olive Wood Rosary",
    price: 39.99,
    rating: 5,
    reviews: 37,
    image: "/placeholder.svg?height=300&width=300",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "The Scripture Journal has been a blessing in my daily devotional time. The quality is exceptional and the prompts help me dive deeper into God's word.",
    avatar: "/placeholder.svg?height=50&width=50",
    date: "March 15, 2024",
  },
  {
    name: "Michael Thomas",
    rating: 5,
    text: "I purchased the wooden cross necklace as a gift for my daughter's confirmation. She absolutely loves it and hasn't taken it off since!",
    avatar: "/placeholder.svg?height=50&width=50",
    date: "February 28, 2024",
  },
  {
    name: "Rebecca Wilson",
    rating: 4,
    text: "The Faith Over Fear t-shirt is not only comfortable but also sparks great conversations about my faith. I've already ordered another one!",
    avatar: "/placeholder.svg?height=50&width=50",
    date: "April 2, 2024",
  },
  {
    name: "David Martinez",
    rating: 5,
    text: "The olive wood rosary is beautifully crafted and has become an important part of my prayer life. The wood has a wonderful texture and the craftsmanship is excellent.",
    avatar: "/placeholder.svg?height=50&width=50",
    date: "April 10, 2024",
  },
  {
    name: "Jennifer Adams",
    rating: 5,
    text: "I bought several items as gifts for my church group, and everyone was thrilled with the quality. The customer service was also exceptional when I needed to make a change to my order.",
    avatar: "/placeholder.svg?height=50&width=50",
    date: "March 22, 2024",
  },
]
