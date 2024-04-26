import Nav from "../components/Nav";

const Update = () => {
  return (

      <div className="max-w-[1600px] mx-auto">
        <Nav></Nav>
        <div className="bg-sky-50 mt-10">
          <h2 className="text-3xl font-extrabold text-center p-10 text-sky-700">
            Add Tourists Spot
          </h2>
          <div className="px-24 pb-24">
            <form>
              <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-bold">
                      Tourists Spot Name
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="tourists_spot_name"
                      placeholder="add your tourists spot name"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                  <label className="label">
                    <span className="label-text font-bold">Country Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="country_Name"
                      placeholder="add country name"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-bold">Average Cost</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      name="average_cost"
                      placeholder="add average cost"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                  <label className="label">
                    <span className="label-text font-bold">Location</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="location"
                      placeholder="add location"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-bold">Seasonality</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="seasonality"
                      placeholder="add seasonality"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                  <label className="label">
                    <span className="label-text font-bold">Travel Time</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      name="travel_time"
                      placeholder="travel time"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-bold">
                      Total Visitors / Year
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      name="totalVisitorsPerYear"
                      placeholder="add total visitors"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                  <label className="label">
                    <span className="label-text font-bold">Description</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="description"
                      placeholder="add your short description"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              <div className="mb-8">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Photo URL</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="photo"
                      placeholder="Photo URL"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <input
                type="submit"
                value="Add Coffee"
                className="btn btn-block bg-sky-700 text-white"
              />
            </form>
          </div>
        </div>
      </div>

  );
};

export default Update;
