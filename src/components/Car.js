import React from "react";
import cars from "../cars.json";
import { Card, CardContent, Typography, Chip } from "@material-ui/core";
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
  const id = props.match.params.id;
  const car = cars.find((c) => c.id == id);
  console.log(id);
  console.log(cars);
  return (
    <div className="car">
      <Card>
        <CardContent>
          <Typography>
            <h2>{cars[id].Name}</h2>
          </Typography>
          {Object.keys(car).map((key, idx) => {
            return <Chip label={`${key}: ${car[key]}`}></Chip>;
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default Car;
