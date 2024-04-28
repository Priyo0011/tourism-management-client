import { useLoaderData} from "react-router-dom";
import Banner from "./Banner";

import TouristsSpots from "../pages/TouristsSpots";
import OurTeam from "./OurTeam";

import Customer from "./Customer";

const Home = () => {
  const spots = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div>
        <h1 className="text-3xl text-center mt-20 text-sky-700 font-bold">Tourists Spots</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mt-10">
          {spots.map((spot) => (
            <TouristsSpots key={spot._id} spot={spot}></TouristsSpots>
          ))}
        </div>
      </div>
      <OurTeam></OurTeam>
      <Customer></Customer>
    </div>
  );
};

export default Home;
