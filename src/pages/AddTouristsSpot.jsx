import Swal from "sweetalert2";
import Nav from "../components/Nav";
import useAuth from "../hooks/useAuth";

const AddTouristsSpot = () => {
  const { user } = useAuth();
  const handleAddSpot = (e) => {
    e.preventDefault();

    const tourists_spot_name = e.target.tourists_spot_name.value;
    const country_Name = e.target.country_Name.value;
    const average_cost = e.target.average_cost.value;
    const location = e.target.location.value;
    const seasonality = e.target.seasonality.value;
    const travel_time = e.target.travel_time.value;
    const totalVisitorsPerYear = e.target.totalVisitorsPerYear.value;
    const description = e.target.description.value;
    const photo = e.target.photo.value;

    const email = user.email;
    const displayName = user.displayName;

    const newSpot = {
      country_Name,
      tourists_spot_name,
      average_cost,
      location,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
      description,
      photo,
      email,
      displayName,
    };

    fetch("http://localhost:5000/addSpot", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tourists Spot Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <Nav></Nav>
      <div className="bg-sky-50 mt-10">
        <h2 className="text-3xl font-extrabold text-center p-10 text-sky-700">
          Add Tourists Spot
        </h2>
        <div className="px-24 pb-24">
          <form onSubmit={handleAddSpot}>
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

export default AddTouristsSpot;
