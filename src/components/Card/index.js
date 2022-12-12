import React from "react";

const Card = ({ id, url, shoeName, condition }) => {
  return (
    <div className="col-md-3">
      <div
        className="card"
        data-shoe-id={id}
      >
        <img
          src={url}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5
            className="card-title"
            id="shoeName"
          >
            {shoeName}
          </h5>
          <p className="card-text">
            <p
              className="h5"
              id="condition"
            >
              {condition}
            </p>
            <p
              className="h6"
              id="price"
            >
              {price}
            </p>
          </p>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#updateModal"
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
