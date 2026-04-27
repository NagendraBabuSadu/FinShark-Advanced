import React, { JSX } from "react";
import "./Card.css";

interface Props {
  companyName?: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="card">
      {/* <img /> */}
      <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>
        <p>${price.toFixed(2)}</p>
      </div>
      <div className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        similique, error totam, fugiat unde minima officiis blanditiis nobis
        consectetur voluptates volu
      </div>
    </div>
  );
};

export default Card;
