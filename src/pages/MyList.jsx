import { useEffect, useState } from "react";

import useAuth from "../hooks/useAuth";
import List from "./List";
import { useNavigation } from "react-router-dom";
import Loader from "../components/Loader";

const MyList = () => {
  const { user } = useAuth();
  const [items, setItem] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://tourism-management-server-sigma.vercel.app/mySpot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user, control]);
  const navigation = useNavigation()
    if(navigation.state === 'loading') return<Loader></Loader>

  return (
    <div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {items?.map((item) => (
          <List
            key={item._id}
            item={item}
            setControl={setControl}
            control={control}
          ></List>
        ))}
      </div>
    </div>
  );
};

export default MyList;
