import { API, APIIMAGES } from "../../shared/Api.js";
import store from "../store.js";

const { dispatch } = store;

const getAllCars = async () => {
  dispatch({ type: "LOADING" });

  setTimeout(async () => {
    const resultado = await API.get("cars");

    const carsNotApproved = resultado.data.filter((car) => !car.checked);
    const carsApproved = resultado.data.filter((car) => car.checked);

    dispatch({
      type: "GET_CARS",
      contenido: {
        cars: resultado.data,
        carsApproved: carsApproved,
        carsNotApproved: carsNotApproved,
      },
    });
  }, 4000);
};

const publicarCoche = async (datos) => {
  dispatch({ type: "LOADING" });

  const formdata = new FormData();

  formdata.append("brand", datos.brand);
  formdata.append("model", datos.model);
  formdata.append("image", datos.image[0]);

  APIIMAGES.post("cars/create", formdata)
    .then((resultado) => {
      dispatch({ type: "CAR_POSTED" });
      console.log(resultado.data);
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: "ERROR_POSTING_CAR",
        contenido: "No has podido publicar el coche",
      });
    });
};

export { getAllCars, publicarCoche };
