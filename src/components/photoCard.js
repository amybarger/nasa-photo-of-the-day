import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

const PhotoCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg width="100%" src={props.image} alt="NASA photo of the day" />

        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.date}</CardSubtitle>
          <CardText>{props.explanation}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default PhotoCard;
