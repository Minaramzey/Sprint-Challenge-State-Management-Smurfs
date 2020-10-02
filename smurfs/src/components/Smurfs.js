import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import Smurf from "./Smurf.js";

function Smurfs(props) {

    useEffect(() => {
        props.fetchSmurfs();
    }, [])

    if(props.isFetching) return (<p>Loading Smurfs...</p>);

  return (
      <div>
          <h1>Village Smurfs:</h1>
          <hr />
          <ul>
              {props.smurfs.map((smurf) => {
                  return (<Smurf key={smurf.id} smurf={smurf}></Smurf>)
              })}
          </ul>
      </div>
  );
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    // error: state.error,
    isFetching: state.isFetching
});

export default connect (mapStateToProps,{ fetchSmurfs })(Smurfs);