/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Quantity from '../../../components/Quantity'

const product = {
  name: 'Nargilem V2A Shiny Amber',
  price: '€249,00',
  href: '#',
  breadcrumbs: [{ id: 1, name: 'Shisha', href: '/shisha' }],
  images: [
    {
      src: 'https://nargilem.com/media/image/43/de/53/amberChrome.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://nargilem.com/media/image/a7/8f/21/base_closeup_12.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://nargilem.com/media/image/d0/47/d2/closed_chamber_6.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://nargilem.com/media/image/33/d9/a5/schliff_kohleteller_6.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
    {
      src: 'https://nargilem.com/media/image/94/e6/b6/schliffadapter_schlauch_v2a_6.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
    {
      src: 'https://nargilem.com/media/image/94/e6/b6/schliffadapter_schlauch_v2a_6.jpg',
      alt: 'dd',
    },
  ],
  colors: [
    { name: 'White', className: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', className: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', className: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    // { name: 'XXS', inStock: false },
    // { name: 'XS', inStock: true },
    // { name: 'S', inStock: true },
    // { name: 'M', inStock: true },
    // { name: 'L', inStock: true },
    // { name: 'XL', inStock: true },
    // { name: '2XL', inStock: true },
    // { name: '3XL', inStock: true },
  ],
  description:
    'Die NARGILEM NPS V2A bestellst Du in der Ausführung nach deiner Farbwahl, zur Auswahl stehen: Shiny Blue, Shiny Red, Shiny Clear und Clear. Die NARGILEM Wasserpfeifen gehören eindeutig zum Premium Sektor auf dem Markt. Das patentierte Ultimate™ System (Bajonettverschluss) wurde erstmals mit CNC gefrästem Edelstahl in Einklang gebracht und harmoniert in Kombination mit den handgefertigten massiven Kristallgläsern somit als schlichtes und zeitloses Design. Da jedes Kristallglas ein Unikat ist, werden wir unserer Tradition in Verbindung mit Präzision für höchste Ansprüche gerecht.',
  highlights: [
    '1 Shishaglas aus schwerem, dickem, handgefertigtem Kristallglas',
    'V2A Rauchsäule aus CNC gefrästem V2A Edelstahl',
    'Base mit Bajonettverschluss und 4 optionalen Anschlüssen',
    'Standard: 1 Schlauchadapter, 3 Verschlusskappen, 3 Polyamid Kugeln 11mm, bis auf 4 Schlauchadapter erweiterbar (als Zubehör im Nargilem Shop auf Anfrage erhältlich) Tauchrohr aus V2A-Edelstah',
    'V2A Edelstahl Ascheteller inklusive 18,8er Schliff Kopfadapter mit Außengewinde und Kopfadapter mit Innengewinde.',
  ],
  details: 'Lieferumfang NARGILEM V2A',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const [removing, setRemoving] = useState(false)

  const handleChange = async ({ target: { value } }) => {
    setQuantity(Number(value))
    await updateItem({ quantity: Number(value) })
  }

  const increaseQuantity = async (n = 1) => {
    const val = Number(quantity) + n
    setQuantity(val)
    await updateItem({ quantity: val })
  }

  const handleRemove = async () => {
    setRemoving(true)
    try {
      await removeItem(item)
    } catch (error) {
      setRemoving(false)
    }
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <Zoom>
                <img
                  src={product.images[3].src}
                  alt={product.images[3].alt}
                  className="w-full h-full object-center object-cover"
                />
              </Zoom>
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <Zoom>
                <img
                  src={product.images[4].src}
                  alt={product.images[4].alt}
                  className="w-full h-full object-center object-cover"
                />
              </Zoom>
            </div>
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <Zoom>
                <img
                  src={product.images[1].src}
                  alt={product.images[1].alt}
                  className="w-full h-full object-center object-cover"
                />
              </Zoom>
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <Zoom>
                <img
                  src={product.images[2].src}
                  alt={product.images[2].alt}
                  className="w-full h-full object-center object-cover"
                />
              </Zoom>
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <Zoom>
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="w-full h-full object-center object-cover"
              />
            </Zoom>
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Produkt Information</h2>
            <p className="text-3xl text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Bewertungen</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? 'text-gray-900'
                          : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} von 5 sternen</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-red-600 hover:text-red-500"
                >
                  {reviews.totalCount} Bewertungen
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Quantity */}
              <div className="inline-block relative w-full">
                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  {Array.from(Array(101).keys()).map((i) => {
                    if (i !== 0) return <option>{i}</option>
                  })}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  {/* <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg> */}
                </div>
              </div>
              {/* FEATURES */}
              <div
                className="bg-white border-t-4 border-red-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-10"
                role="alert"
              >
                <div className="flex">
                  <div className="py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Jetzt sparen</p>
                    <p className="text-sm">
                      Kaufe noch 6 weitere und spare 245EUR!
                    </p>
                  </div>
                </div>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                {/* <div className="flex items-center justify-between">
                  <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div> */}

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                              : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                            active ? 'ring-2 ring-red-500' : '',
                            'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="p">
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <div
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked
                                    ? 'border-indigo-500'
                                    : 'border-transparent',
                                  'absolute -inset-px rounded-md pointer-events-none'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <div
                                aria-hidden="true"
                                className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                              >
                                <svg
                                  className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </div>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="mt-2 w-full bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                In den Warenkorb
              </button>
            </form>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
