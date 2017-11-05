import React, { Component } from 'react';
import './style.css';

export default (props) => {
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const amount = numberWithCommas(props.amount);
  
  return (
    <div className="Rewards">
      <span className="reward col-xs-8">{props.reward}</span>
      <span className="amount col-xs-2">{amount}</span>
    </div>
  );
}