import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connections";

const Connections = () => {
  const connections = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1>No Connections Found</h1>;

  return (
    <div className="my-10">
      <h1 className="font-bold text-2xl">Connections</h1>
      {connections.map((connection) => {
        const { firstName, lastName, photoUrl, age, about } = connection;
        return (
          <div key={connection._id}>
            <img className="w-20 h-20" alt="photo" src={photoUrl} />
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
