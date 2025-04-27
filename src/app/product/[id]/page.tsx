"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Heart, Minus, Plus, Share2, ShoppingBag, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number.parseInt(params.id)

  // Find the product based on the ID
  const product = products.find((p) => p.id === productId) || products[0]

  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  return (
    <div className="container px-4 py-10 md:px-6 md:py-12 lg:py-16">
      <div className="flex flex-col gap-2 pb-4">
        <nav className="flex gap-1 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#718355] transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/shop" className="hover:text-[#718355] transition-colors">
            Shop
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/category/${product.category}`} className="hover:text-[#718355] transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-white">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="overflow-hidden rounded-lg border bg-white">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.name} view ${i}`}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-[#718355]">{product.name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < product.rating ? "fill-[#97A97C] text-[#97A97C]" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>
            <p className="text-2xl font-bold text-[#718355]">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-md border">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-r-none"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <div className="flex w-12 items-center justify-center text-sm font-medium">{quantity}</div>
                <Button variant="ghost" size="icon" className="rounded-l-none" onClick={incrementQuantity}>
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
              <span className="text-sm text-gray-500">
                {product.stock > 10 ? "In Stock" : product.stock > 0 ? `Only ${product.stock} left` : "Out of Stock"}
              </span>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="bg-[#718355] hover:bg-[#87986A] flex-1" size="lg">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" className="border-[#718355] text-[#718355]" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>
          </div>

          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex items-start gap-2">
              <Truck className="h-5 w-5 text-[#718355]" />
              <div>
                <p className="font-medium">Free Shipping</p>
                <p className="text-sm text-gray-500">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-[#718355]"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              <div>
                <p className="font-medium">Secure Payment</p>
                <p className="text-sm text-gray-500">100% secure payment</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-[#718355]"
              >
                <path d="M21 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z" />
                <path d="M4 10h16" />
              </svg>
              <div>
                <p className="font-medium">Easy Returns</p>
                <p className="text-sm text-gray-500">30 day return policy</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-gray-500">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start border-b">
            <TabsTrigger value="description" className="text-[#718355]">
              Description
            </TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-4">
            <div className="space-y-4">
              <p>{product.fullDescription}</p>
              <p>
                This product is designed to inspire and strengthen your faith journey. Each item is carefully crafted
                with attention to detail and quality materials.
              </p>
              <p>
                "For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you,
                plans to give you hope and a future." - Jeremiah 29:11
              </p>
            </div>
          </TabsContent>
          <TabsContent value="details" className="pt-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-[#718355]">Product Details</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Material</span>
                    <span>{product.material}</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Dimensions</span>
                    <span>{product.dimensions}</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Weight</span>
                    <span>{product.weight}</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Color</span>
                    <span>{product.color}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#718355]">Shipping Information</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Shipping Time</span>
                    <span>3-5 business days</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Shipping Cost</span>
                    <span>Free over $50</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">International</span>
                    <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-4">
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="border-b pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-[#97A97C] text-[#97A97C]" : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                    </div>
                  </div>
                  <h4 className="mt-2 font-medium">{review.title}</h4>
                  <p className="mt-1 text-gray-600">{review.text}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#718355]">You May Also Like</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((product) => (
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
                <h3 className="font-semibold text-[#718355] group-hover:underline">{product.name}</h3>
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
                <p className="mt-2 font-bold text-[#718355]">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

const products = [
  {
    id: 1,
    name: "Wooden Cross Necklace",
    price: 29.99,
    rating: 5,
    reviews: 124,
    stock: 15,
    category: "Jewelry",
    image: "/placeholder.svg?height=600&width=600",
    description: "Handcrafted wooden cross necklace with adjustable leather cord.",
    fullDescription:
      "This beautiful handcrafted wooden cross necklace serves as a meaningful reminder of your faith. Each piece is carefully carved from olive wood sourced from the Holy Land, making each necklace unique. The cross comes with an adjustable leather cord that fits comfortably around your neck.",
    material: "Olive Wood, Leather",
    dimensions: '1.5" x 1"',
    weight: "0.5 oz",
    color: "Natural Wood",
  },
  {
    id: 2,
    name: "Scripture Journal",
    price: 19.99,
    rating: 4,
    reviews: 86,
    stock: 23,
    category: "Books",
    image: "/placeholder.svg?height=600&width=600",
    description: "Premium leather-bound journal with scripture verses on each page.",
    fullDescription:
      "Our Scripture Journal is designed to enhance your daily devotional time. Each page features a carefully selected verse from the Bible to inspire reflection and prayer. The journal is bound in premium faux leather with 200 lined pages and a ribbon bookmark.",
    material: "Faux Leather, Paper",
    dimensions: '8.5" x 5.5"',
    weight: "12 oz",
    color: "Brown",
  },
  {
    id: 3,
    name: "Faith Over Fear T-Shirt",
    price: 24.99,
    rating: 5,
    reviews: 52,
    stock: 8,
    category: "Apparel",
    image: "/placeholder.svg?height=600&width=600",
    description: "Comfortable cotton t-shirt with 'Faith Over Fear' design.",
    fullDescription:
      "Spread a message of hope and courage with our Faith Over Fear t-shirt. Made from 100% organic cotton, this shirt is not only comfortable but also environmentally friendly. The design features the powerful message 'Faith Over Fear' in elegant typography, reminding you and others of the strength found in faith.",
    material: "100% Organic Cotton",
    dimensions: "Sizes S-XXL",
    weight: "6 oz",
    color: "Sage Green",
  },
  {
    id: 4,
    name: "Olive Wood Rosary",
    price: 39.99,
    rating: 5,
    reviews: 37,
    stock: 5,
    category: "Jewelry",
    image: "/placeholder.svg?height=600&width=600",
    description: "Traditional rosary handcrafted from authentic olive wood from the Holy Land.",
    fullDescription:
      "This beautiful rosary is handcrafted from authentic olive wood sourced directly from the Holy Land. Each bead is carefully shaped and polished to create a smooth, comfortable feel. The crucifix and centerpiece are made from durable zinc alloy with an antique finish. The rosary comes in a gift box with a certificate of authenticity.",
    material: "Olive Wood, Zinc Alloy",
    dimensions: '20" length',
    weight: "1.2 oz",
    color: "Natural Wood",
  },
]

const relatedProducts = [
  {
    id: 5,
    name: "Psalm 23 Wall Art",
    price: 34.99,
    rating: 4,
    reviews: 28,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Faith Bracelet",
    price: 19.99,
    rating: 5,
    reviews: 42,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "Proverbs 31 Mug",
    price: 15.99,
    rating: 4,
    reviews: 19,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "Christian Planner",
    price: 29.99,
    rating: 5,
    reviews: 56,
    image: "/placeholder.svg?height=300&width=300",
  },
]

const reviews = [
  {
    name: "Michael Thomas",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "March 15, 2024",
    rating: 5,
    title: "Beautiful craftsmanship",
    text: "I purchased this as a gift for my daughter's confirmation. The quality is exceptional and she absolutely loves it. The wood has a beautiful grain and the size is perfect - not too large or small. Highly recommend!",
  },
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "February 28, 2024",
    rating: 5,
    title: "Meaningful gift",
    text: "This makes such a meaningful gift. The craftsmanship is beautiful and you can tell it's made with care. The leather cord is adjustable which is great. I've received many compliments when wearing it.",
  },
  {
    name: "David Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "January 12, 2024",
    rating: 4,
    title: "Great quality",
    text: "The necklace is beautiful and well-made. The only reason I'm giving 4 stars instead of 5 is that the cord was a bit longer than I expected. Otherwise, it's a wonderful piece that I wear often.",
  },
]
