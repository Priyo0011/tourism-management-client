import { useLoaderData, useNavigation } from "react-router-dom";

import TouristsSpots from "./TouristsSpots";
import Loader from "../components/Loader";

const AllTouristsSpot = () => {
  const spots = useLoaderData();
  const navigation = useNavigation()
    if(navigation.state === 'loading') return<Loader></Loader>
  return (
    <div>
      <div>
        <h1 className="text-3xl text-center mt-20 text-sky-700 font-bold">
          ALL Tourists Spots
        </h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mt-10">
          {spots.map((spot) => (
            <TouristsSpots key={spot._id} spot={spot}></TouristsSpots>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTouristsSpot;
