export default function Cart() {
  return (
    
    <div
  className="relative z-10"
  aria-labelledby="slide-over-title"
  role="dialog"
  aria-modal="true"
>
  {/* Background backdrop, optional based on slide-over state */}
  <div className=" bg-gray-500  transition-opacity z-10"></div>

  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 z-20">
    {/* Slide-over panel */}
    <div className="pointer-events-auto w-screen max-w-md">
      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
              Items
            </h2>
            <div className="ml-3 flex h-7 items-center">
              {/* Close button or any additional options can go here */}
            </div>
          </div>
          {/* Product list */}
          <div className="mt-8 flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {/* Example products */}
              <li className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 rounded-md border border-gray-200">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyB75mGdG5LHbn0MOtGOdHHobrLvhtGQ9v0A&s"
                    alt="Product Image"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href="#">Casio G-Shock</a>
                    </h3>
                    <p className="ml-4">$900.00</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">G-Shock</p>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>
                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              {/* More products can be added similarly */}
            </ul>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Total
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}
