import React from "react";

function Card({title, image, description}) {
  return (
    <div>
      <div className="card m-2">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
