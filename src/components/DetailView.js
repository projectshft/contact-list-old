import React from 'react';

const DetailView = props => {
  return (
    <div className="row">
      <div className="col-6">
        <img className="headshot" src={props.image_url} alt="" />
      </div>
      <div className="col-6">
        <h3>Stuff and</h3>
        <h3>Stuff and</h3>
        <h3>Stuff and</h3>
        <h3>Stuff and</h3>
        <h3>Stuff</h3>
      </div>
    </div>
  );
};

export default DetailView;
