import React from "react";

const PhotoCard = props => {
    return (
        <div className="photo-card" key={props.date}>
            <h2>Date: {props.date}</h2>
            <p>{props.explanation}</p>
            <img src={props.image} alt="NASA photo of the day"></img>
            <p>{props.media_type}</p>
            <p>{props.service_version}</p>

        </div>
    )
}

export default PhotoCard;