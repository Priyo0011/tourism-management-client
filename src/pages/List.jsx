import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const List = ({ item, setControl, control }) => {
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
    email,
    displayName,
    _id,
  } = item;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Spot has been deleted.", "success");
              setControl(!control);
            }
          });
      }
    });
  };

  return (
    <div className="mt-8">
      <div className=" bg-sky-50">
        <figure>
          <img className="h-[240px] w-full p-4 " src={photo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tourists_spot_name}</h2>
          <h3 className="font-bold uppercase">{totalVisitorsPerYear}</h3>
          <div className="flex">
            <p>
              <span className="font-semibold">Price</span> ${average_cost}
            </p>
          </div>
          <div className="flex justify-around">
            <Link to={`update/${_id}`}>
              <button className="btn bg-sky-700 text-white uppercase w-full">
                Update
              </button>
            </Link>

            <div>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-sky-700 text-white uppercase w-full"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
