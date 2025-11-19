import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentId) {
    setRating(currentId);
  }

  function handleMouseMove(currentId) {
    setHover(currentId);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        return (
          <FaStar
            className={index <= (rating || hover) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={()=> handleMouseLeave()}
            size={30}
          />
        );
      })}
    </div>
  );
}
