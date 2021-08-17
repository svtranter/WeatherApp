import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function WeatherCards(props) {
  const iconUrl = "http://openweathermap.org/img/wn/" + props.card.weather[0].icon +"@2x.png"
  return (
    <CardGroup className="text-center">
      <Card>
        <Card.Header bg="secondary" variant="dark">
          <h1>{new Date(props.card.dt * 1000).toDateString()}</h1>
        </Card.Header>
        <Card.Body>
          <img src={iconUrl}/>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.card.weather[0].description}</li>
          </ul>
          <Table>
            <thead>
              <tr>
                <th>High</th>
                <th>Low</th>
                <th>Wind Speed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.card.temp.max}</td>
                <td>{props.card.temp.min}</td>
                <td>{props.card.wind_speed}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default WeatherCards;
