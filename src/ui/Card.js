import React from 'react';


const Card = (props) => {
      return(
<div className="col-12 col-sm-4" style={{paddingTop: '2%'}}>        
<div className="card" style={{width: '18rem'}}>
  <img src="https://png.pngtree.com/svg/20170816/f03d3a419e.png" style={{
    width: '100px',
    height: '100px',
    paddingTop: '5px'
  }} className="card-img-top rounded mx-auto d-block" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <button className="btn btn-outline-primary" onClick={props.action}>{props.button}</button>
  </div>
</div>
</div>
      );
}

export default Card;