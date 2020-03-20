import React, { useState, useEffect } from 'react';
import axios from "axios"

function Smurf(props) {

    const [smurf, setSmurf] = useState({});

    useEffect(() => {
        setSmurf(props.smurf);
    }, [props.smurf])

    function deleteSmurf (e) {
        e.preventDefault();
        console.log("deleting");
        axios
            .delete(`http://localhost:3333/smurfs/${smurf.id}`)
            .then(res =>("Deleted Smurf"))
            .catch(err => ("Error Deleting Smurf"))
            .finally(() => window.location.reload())
    }

    return (
        <div>
            <p>{smurf.name}</p>
            <p>Height: {props.smurf.height}</p>
            <p>Age: {props.smurf.age}</p>
            <button onClick={e => {console.log("delete"); deleteSmurf(e)}}>Caught the Corona</button>
        </div>
    );
}

export default Smurf; 