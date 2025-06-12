"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Header from "@/components/header"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/team/sarah.jpg",
    bio: "Sarah founded BeSenbet with a vision to create a marketplace that combines faith, quality, and community.",
  },
  {
    name: "Michael Thomas",
    role: "Product Curator",
    image: "/team/michael.jpg",
    bio: "Michael brings 15 years of experience in sourcing unique, handcrafted Christian goods from around the world.",
  },
  {
    name: "Rebecca Wilson",
    role: "Community Manager",
    image: "/team/rebecca.jpg",
    bio: "Rebecca builds and nurtures our vibrant community of artisans and customers.",
  },
]

const values = [
  {
    title: "Faith-Centered",
    description: "Our Christian faith guides every decision we make and every product we offer.",
    icon: "🙏",
  },
  {
    title: "Quality Craftsmanship",
    description: "We partner with skilled artisans who create beautiful, lasting pieces.",
    icon: "⚒️",
  },
  {
    title: "Community Focus",
    description: "We build meaningful connections between makers and believers.",
    icon: "🤝",
  },
  {
    title: "Ethical Sourcing",
    description: "We ensure fair compensation and sustainable practices in all our partnerships.",
    icon: "🌱",
  },
]

export default function AboutPage() {
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
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Bringing faith and craftsmanship together to serve our community
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#718355] mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                At BeSenbet, our mission is to provide high-quality, faith-inspired products that enhance your spiritual journey. We believe that beautiful, well-crafted items can deepen your connection with God and strengthen your faith practice.
              </p>
              <p className="text-gray-600 text-lg">
                We work directly with skilled artisans and craftspeople who share our commitment to excellence and faith. Every product in our collection is carefully selected to ensure it meets our high standards for both quality and spiritual significance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/about/mission.jpg"
                alt="Artisan crafting a wooden cross"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#718355] mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These core values guide everything we do at BeSenbet
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#718355] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#718355] mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The passionate people behind BeSenbet
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#718355] mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#718355] text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-lg mb-8 text-white/90">
              Be part of our mission to bring beautiful, faith-inspired products to believers around the world.
            </p>
            <a
              href="/shop"
              className="inline-block bg-white text-[#718355] px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Our Collection
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 