export default function CreateListing() {
  return (
    <main className="max-w-4xl mx-auto p-3">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rouded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
          ></input>
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rouded-lg"
            id="description"
            required
          ></textarea>
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rouded-lg"
            id="address"
            maxLength="62"
            minLength="10"
            required
          ></input>
          <div className="flex flex-wrap items-start gap-x-6 gap-y-1">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking Spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bedrooms"
                className="border p-3 rounded-lg w-20"
              />
              <span>Beds</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bathrooms"
                className="border p-3 rounded-lg w-20"
              />
              <span>Baths</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="regularPrice"
                className="border p-3 rounded-lg  w-30"
              />
              <div className="flex items-center justify-center flex-col">
                <span>Regular price</span>
                <span className="text-xs">($/Month)</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="discountPrice"
                className="border p-3 rounded-lg  w-30"
              />
              <div className="flex items-center justify-center flex-col">
                <span>Discounted price</span>
                <span className="text-xs">($/Month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex gap-1">
            <p className="font-semibold">Images: </p>
            <p>The first image will be cover (max 6)</p>
          </div>
          <div className="flex gap-2">
            <input
              type="file"
              accept="image/*"
              multiple
              className="p-3 border-gray-300 border rounded-md w-full"
            />
            <button
              type="button"
              className="text-green-700 border-green-700 border rounded-md uppercase p-3 hover:shadow-lg hover:opacity-95 disabled:opacity-80"
            >
              upload
            </button>
          </div>
          <button className="p-3 rounded-lg text-white bg-slate-500 uppercase hover:opacity-95 mt-5">create listing</button>
        </div>
      </form>
    </main>
  );
}
