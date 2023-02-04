import React from 'react';

function CheckoutPage() {
  return (
    <div className="bg-gray-100 p-5 flex justify-center mt-20 mx-auto">
      <div className="md:w-1/3 md:h-2/3">
        <div className="bg-white p-3 shadow-md rounded">
          <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>
          <form>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border border-gray-400 p-1 w-full"
                id="name"
                type="text"
                placeholder="Jane Doe"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-400 p-1 w-full"
                id="email"
                type="email"
                placeholder="jane.doe@example.com"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input
                className="border border-gray-400 p-1 w-full"
                id="address"
                type="text"
                placeholder="1234 Main St"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
                City
              </label>
              <input
                className="border border-gray-400 p-1 w-full"
                id="city"
                type="text"
                placeholder="San Francisco"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="state">
                State
              </label>
              <input
                className="border border-gray-400 p-1 w-full"
                id="state"
                type="text"
                placeholder="CA"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="zip">
                Zip
              </label>
              <input
                className="border border-gray-400 p-1 w-full"
                id="zip"
                type="text"
                placeholder="94111"
              />
            </div>
            <div className="text-center">
              <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >Submit
              </button>
            </div>
           </form>
          </div>
        </div>
    </div>
 );
}

export default CheckoutPage;
