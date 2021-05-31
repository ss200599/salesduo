import React from 'react';
import {Container} from 'react-bootstrap';
import Barr from './Barr';
// import Shit from './Barr';
const IncomeCard = () => {
  return (
    <Container
      style={{
        position: "absolute",
        top: "90px",
        marginLeft: "270px",
        float: "left",
      }}
    >
      <div className="bar">
        <div className="info">
          <p
            style={{
              fontFamily: "Arial, Helvetic a, sans-serif",
              color: "#8997A7",
            }}
          >
            Total Income
          </p>
          <span
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              margin: "0px",
              lineHeight: "40px",
            }}
          >
            $124,563.00
            <span
              style={{
                fontSize: "15px",
                width: "50px",
                height: "40px",
                background: "#18BB84",
                borderRadius: "20px",
                verticalAlign: "bottom",
              }}
            >
              +6.9%
            </span>
          </span>
        </div>
        <Barr />
      </div>
    </Container>
  );
};

export default IncomeCard;