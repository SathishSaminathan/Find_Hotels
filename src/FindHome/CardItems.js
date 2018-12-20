import React, { Component } from "react";
import { Card } from "antd";

const { Meta } = Card;

const CardItems = ({ CardDetails }) => {
  const displayCards =
    CardDetails &&
    CardDetails.map((detail,i) => (
      <Card
      key={i}
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${detail.cloudinaryImageId}`}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    ));
  return <React.Fragment>{displayCards}</React.Fragment>;
};

export default CardItems;
