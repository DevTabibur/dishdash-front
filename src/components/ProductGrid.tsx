'use client'

import { useState } from 'react'
import Script from 'next/script'
import type { Product, ProductCategory } from '@/types/product'
import ProductCard from './ProductCard'


interface ProductGridProps {
  products: Product[]
  onAddToCart: (productId: string, quantity: number) => void
}

const categories: ProductCategory[] = ['All', 'Male', 'Female', 'Children', 'Others']

const ProductGrid = ({ products, onAddToCart }: ProductGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All')

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filteredProducts.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": product.image,
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "USD"
        }
      }
    }))
  }

  return (
    <>
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold mb-6">Our Products</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors
                  ${selectedCategory === category
                    ? 'bg-[#FF6B98] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {filteredProducts.length > 0 && (
          <div className="text-center mt-8">
            <button className="bg-[#FF6B98] text-white px-6 py-2 rounded hover:bg-[#ff5288] transition-colors">
              View More
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default ProductGrid

