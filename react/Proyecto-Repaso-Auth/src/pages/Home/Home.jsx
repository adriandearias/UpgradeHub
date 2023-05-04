import { useSelector } from "react-redux";
import "./Home.css";
import Car from "../../components/Car/Car";
import Loading from "../../components/Loading/Loading";

const Home = () => {

  const { loading, carsApproved } = useSelector((state) => state.cars);

  return (
    <div className="home">
      {loading && (
        <Loading/>
      )}
      <div className="cars">
        {carsApproved.length > 0 &&
          carsApproved.map((car) => {
            return (
              <Car car={car} key={car._id}/>
            );
          })}
      </div>
    </div>
  );
};

export default Home;