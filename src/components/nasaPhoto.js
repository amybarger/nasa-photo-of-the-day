import React, { useState, useEffect } from "react";
import axios from "axios";

function NasaPhoto() {
    const [photo, setPhoto] = useState([])

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=4XO521J5D0HSlMc4b3cQU6ufYAdvKWOnkSEg4O0a")
            .then(response => {
                console.log(response.data);
                setPhoto(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    console.log("NASA data", setPhoto);
    return (
        <div>

        </div>
    )
}

export default NasaPhoto;
