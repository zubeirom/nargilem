/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Shisha Avantgarde Shiny Amber',
    href: '#',
    imageSrc:
      'https://nargilem.com/media/image/85/d4/4f/avan_amberChrome_600x600.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '€199,00',
    color: 'NPS',
  },
  {
    id: 2,
    name: 'Shisha Avantgarde Bronze Shiny Turquoise',
    href: '#',
    imageSrc:
      'https://nargilem.com/media/image/ca/72/43/avan_turkisBronze_600x600.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '€199,00',
    color: 'NPS',
  },
  {
    id: 3,
    name: 'Shisha Avantgarde Shiny Clear',
    href: '#',
    imageSrc:
      'https://nargilem.com/media/image/83/6a/b7/avan_clearChrome_600x600.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '€199,00',
    color: 'NPS',
  },
  {
    id: 4,
    name: 'Shisha Avantgarde Black Gold Matt',
    href: '#',
    imageSrc:
      'https://nargilem.com/media/image/91/af/c5/avan_blackGlitterChrome_600x600.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '€199,00',
    color: 'NPS',
  },
  {
    id: 5,
    name: 'Shisha Avantgarde Bronze Shiny Pink',
    href: '#',
    imageSrc:
      'https://nargilem.com/media/image/ae/e5/3d/avan_pinkBronze_600x600.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '€199',
    color: 'NPS',
  },
  {
    id: 6,
    name: 'V2A Shiny Amber',
    href: '#',
    imageSrc:
      'https://nargilem.com/media/image/46/23/51/amberChrome_600x600.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '€249,00',
    color: 'Nargilem',
  },
  {
    id: 7,
    name: 'V2A Shiny Clear',
    href: '#',
    imageSrc:
      'https://nargilem.com/media/image/bc/6f/ab/shiny_shiny_600x600.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '€249,00',
    color: 'Nargilem',
  },
  // More products...
]

export default function ProductList() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-2 px-4 sm:py-2 sm:px-8 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <a href={product.href}>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </a>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
