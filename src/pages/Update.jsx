import Swal from "sweetalert2";

import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const spot = useLoaderData();
  const {
    country_Name,
    tourists_spot_name,
    average_cost,
    location,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
    description,
    photo,
    _id,
  } = spot;

  const handleUpdateSpot = (event) => {
    event.preventDefault();

    const form = event.target;

    const country_Name = form.country_Name.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const average_cost = form.average_cost.value;
    const location = form.location.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const updatedSpot = {
      country_Name,
      tourists_spot_name,
      average_cost,
      location,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
      description,
      photo,
    };

    console.log(updatedSpot);

    fetch(`http://localhost:5000/singleSpot/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Spot Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="max-w-[1600px] mx-auto">

      <div className="bg-base-200 mt-10">
        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-1/2 px-5 py-1 text-sm text-white transition-colors duration-200 bg-sky-600 border  gap-x-2 sm:w-auto   hover:bg-gray-100 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:rotate-180 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>Go back</span>
          </button>
        </div>
        <h2 className="text-3xl font-extrabold text-center p-10 text-sky-700">
          Update Tourists Spot
        </h2>
        <div className="md:px-24 px-8   md:pb-24 pb-8">
          <form onSubmit={handleUpdateSpot}>
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
                    defaultValue={tourists_spot_name}
                    placeholder="add your tourists spot name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text font-bold">Country Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="country_Name"
                    defaultValue={country_Name}
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
                    defaultValue={average_cost}
                    placeholder="add average cost"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text font-bold">Location</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="location"
                    defaultValue={location}
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
                    defaultValue={seasonality}
                    placeholder="add seasonality"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text font-bold">Travel Time</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="travel_time"
                    defaultValue={travel_time}
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
                    defaultValue={totalVisitorsPerYear}
                    placeholder="add total visitors"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text font-bold">Description</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    defaultValue={description}
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
                    defaultValue={photo}
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Update Tourists Spot"
              className="btn btn-block bg-sky-700 text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
