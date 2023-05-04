import React, { useState } from "react";
import "./PostCar.css";
import Loading from "../../components/Loading/Loading";
import { useForm } from "react-hook-form";
import { publicarCoche } from "../../redux/cars/cars.actions";

const PostCar = () => {
  /* model, brand, image. */

  const { register, handleSubmit } = useForm();

  const [image, setImage] = useState();

  return (
    <div className="post-car">
      <Loading width="20%"/>
      <h2>PUBLICAR UN NUEVO COCHE</h2>
      <form onSubmit={handleSubmit(publicarCoche)}>
        <div>
          <label>Marca</label>
          <input {...register("brand")}/>
        </div>
        <div>
          <label>Modelo</label>
          <input {...register("model")}/>
        </div>
        <div>
          <label>Imagen</label>
          <input type="file" {...register("image")} onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}/>
        </div>
        {image && <img className="imagen" src={image}/>}
        <button>PUBLICAR</button>
      </form>
    </div>
  );
};

export default PostCar;
