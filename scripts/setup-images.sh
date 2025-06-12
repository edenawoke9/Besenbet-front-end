#!/bin/bash

# Create necessary directories
mkdir -p public/gallery
mkdir -p public/products
mkdir -p public/categories
mkdir -p public/avatars

# Function to download a placeholder image if it doesn't exist
download_placeholder() {
  local path=$1
  local width=$2
  local height=$3
  
  if [ ! -f "public/$path" ]; then
    echo "Downloading placeholder for $path..."
    curl -L -o "public/$path" "https://picsum.photos/${width}/${height}"
  fi
}

# Download gallery images
download_placeholder "gallery/worship1.jpg" 800 800
download_placeholder "gallery/cross1.jpg" 800 800
download_placeholder "gallery/bible1.jpg" 800 800
download_placeholder "gallery/prayer1.jpg" 800 800
download_placeholder "gallery/candle1.jpg" 800 800
download_placeholder "gallery/icon1.jpg" 800 800

# Download category images
download_placeholder "categories/bibles-books.jpg" 800 600
download_placeholder "categories/jewelry.jpg" 800 600
download_placeholder "categories/home-decor.jpg" 800 600
download_placeholder "categories/apparel.jpg" 800 600

# Download product images
download_placeholder "products/wooden-cross-necklace.jpg" 600 600
download_placeholder "products/scripture-journal.jpg" 600 600
download_placeholder "products/faith-over-fear-shirt.jpg" 600 600
download_placeholder "products/olive-wood-rosary.jpg" 600 600

# Download avatar images
download_placeholder "avatars/sarah.jpg" 200 200
download_placeholder "avatars/michael.jpg" 200 200
download_placeholder "avatars/rebecca.jpg" 200 200
download_placeholder "avatars/david.jpg" 200 200
download_placeholder "avatars/jennifer.jpg" 200 200

echo "Image setup complete!" 