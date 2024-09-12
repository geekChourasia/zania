import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { DocumentData } from "../data";
import "../App.css";

interface CardProps {
  document: DocumentData;
  index: number;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ document, index, onClick }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const img = new Image();
    img.src = `/cat-images/${document.type}.png`;
    img.onload = () => setLoading(false);
  }, [document.type]);

  return (
    <div
      className="card"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <img
          className="card-image"
          src={`/cat-images/${document.type}.png`}
          alt={document.title}
          style={{ width: "150px", height: "150px" }}
        />
      )}
      <h3>{document.title}</h3>
    </div>
  );
};

export default Card;
