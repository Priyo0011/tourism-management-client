import { useNavigate, useParams } from "react-router-dom";

import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [detail, setDetail] = useState({});
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
  } = detail;

  useEffect(() => {
    fetch(`http://localhost:5000/singleSpot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
        console.log(data);
      });
  }, [id]);
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="mt-10">
        <div className=" bg-base-200 ">
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
          <div className="p-4 md:p-16">
            <figure>
              <img className="md:h-[480px] md:w-full " src={photo} alt="" />
            </figure>

            <div className="card-body">
              <div className=" bg-sky-100"></div>
              <h2 className="card-title text-2xl">
                Country Name :{" "}
                <span className="font-light ml-4">{country_Name}</span>
              </h2>
              <div className="flex items-center">
                <h3 className="font-bold uppercase mr-20">
                  Tourists Spot :{" "}
                  <span className="font-light ml-4">{tourists_spot_name}</span>
                </h3>
                <p className="flex items-center ml-8 gap-4 p-1">
                  <FaLocationDot className="font-bold"/>
                  <span className="font-light">{location}</span>
                </p>
              </div>
              <div className=" md:grid grid-cols-4 items-center">
                <p className="font-semibold">Average Cost :
                  <span className="font-light ml-4">$ {average_cost}</span>
                  
                </p>
                <p className="font-semibold">
                  Travel Time :<span className="ml-4 font-light">{travel_time} day.</span>
                </p>
                <p className="font-semibold">seasonality : <span className="ml-4 font-light">{seasonality}</span></p>
                <p className="font-semibold">Total Visitors :
                  <span className="ml-4 font-light">{totalVisitorsPerYear} people /Year</span>
                  {}
                </p>
              </div>
              <p className="mt-4">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
