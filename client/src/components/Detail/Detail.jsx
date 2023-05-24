import React, { useState, useEffect } from "react";
import "./Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(` http://localhost:3001/rickandmorty/character/${id} `).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className="detailContainer">
      <h1 className="name">{character.name}</h1>
      <h1 className="status">{character.status}</h1>
      <h1 className="species">{character.species}</h1>
      <h1 className="gender">{character.gender}</h1>
      <h1 className="origin">{character.origin?.name}</h1>
      <img className="image" src={character.image} alt="" />
    </div>
  );
};

export default Detail;

