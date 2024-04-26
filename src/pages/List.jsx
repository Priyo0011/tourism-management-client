
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const List = ({ item, setControl, control }) => {
    
  const {
    country_Name,
    tourists_spot_name,
    average_cost,
    travel_time,
    photo,
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
          <h2 className="card-title">Country Name: <span className="font-light ml-3">{country_Name}</span> </h2>
          <h3 className="font-bold uppercase">Tourists Spot: <span className="font-light ml-3">{tourists_spot_name}</span></h3>
          <div className="flex">
            <p>
              <span className="font-semibold ">Average Cost:</span> <span className="ml-2 font-light">${average_cost}</span>
            </p>
            <p>
              <span className="font-semibold">Travel Time: </span><span className="ml-2 font-light">{travel_time} day</span>
            </p>
          </div>
          <div className="flex justify-around mt-8">
            <Link to={`/update/${_id}`}>
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
