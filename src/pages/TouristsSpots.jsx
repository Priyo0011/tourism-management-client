import { Link } from "react-router-dom";


const TouristsSpots = ({spot}) => {
    const {country_Name,
        tourists_spot_name,
        average_cost,
        travel_time,
        photo,
        _id}=spot;
    return (
        <div>
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
          <div className=" mt-8">
            <Link>
              <button className="btn bg-sky-700 text-white uppercase w-full">
              View Details page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default TouristsSpots;