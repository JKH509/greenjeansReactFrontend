import React from 'react'
import { Link } from 'react-router-dom'




const collections = [
  {
    name: "Fertilizer Specials",
    to: '/fertilizer-services',
    imageSrc: 'https://www.lawnbuddies.com/hs-fs/hubfs/EDITEDLB_AUG_2015_0027-scaled.jpeg?width=600&name=EDITEDLB_AUG_2015_0027-scaled.jpeg',
    imageAlt: 'Woman wearing an off-white cotton t-shirt.',
  },
  {
    name: "Sprinkler Specials",
    to: '/sprinkler-services',
    imageSrc: require("../../assets/images/victor-sprinkler-unsplash.jpg"),
    imageAlt: 'Pop up sprinkler in the fall season',
  },
  {
    name: 'Lawn Care Specials',
    to: '/lawn-services',
    imageSrc: require("../../assets/images/remi-lawn-unsplash.jpg"),
    imageAlt: 'Person maintaining sports field lawn',
  },
]

const EarlyBirdSpecials = () => {
  return (
    <div className="relative bg-white container mx-auto mt-12">
  <div className=''>
      {/* Background image and overlap */}
      <div aria-hidden="true" className="hidden absolute inset-0 sm:flex sm:flex-col">
        <div className="flex-1 relative w-full bg-gray-800">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://www.thespruce.com/thmb/b5IZ_jeCsj2VPd_NP1VaXdZG8To=/2001x1499/filters:fill(auto,1)/GettyImages-1255835530-97204ae990c6438b96a6f7534bb08ba5.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-50" />
        </div>
        <div className="w-full bg-white h-32 md:h-40 lg:h-48" />
      </div>

      <div className="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
        {/* Background image and overlap */}
        <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
          <div className="flex-1 relative w-full bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://www.thespruce.com/thmb/b5IZ_jeCsj2VPd_NP1VaXdZG8To=/2001x1499/filters:fill(auto,1)/GettyImages-1255835530-97204ae990c6438b96a6f7534bb08ba5.jpg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="w-full bg-white h-48" />
        </div>
        <div className="relative py-32">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">Early Bird Discounts</h1>
          <div className="mt-4 sm:mt-6">
            <Link
              to="/services"
              className="inline-block bg-green-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-blue-700"
            >
              Look at Services
            </Link>
          </div>
        </div>
      </div>

      <section aria-labelledby="collection-heading" className="-mt-96 relative sm:mt-0">
        <h2 id="collection-heading" className="sr-only">
          Services
        </h2>
        <div className="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
            >
              <div>
                <div aria-hidden="true" className="absolute inset-0 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                    <img
                      src={collection.imageSrc}
                      alt={collection.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                </div>
                <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                  <div>
                    <p aria-hidden="true" className="text-sm text-white">
                      Look at service
                    </p>
                    <h3 className="mt-1 font-semibold text-white">
                      <Link to={collection.to}>
                        <span className="absolute inset-0" />
                        {collection.name}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  )
}

export default EarlyBirdSpecials
