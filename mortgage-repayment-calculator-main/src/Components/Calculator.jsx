import React from "react";
import "./Calculator.css";
import calculator from "./Assets/icon-calculator.svg";

const Calculator = () => {
  return (
    <div className="container">
      <div className="calculator">
        <div className="nav">
          <h1>Mortgage Calculator</h1>
          <p>Clear All</p>
        </div>
        <div className="amount">
          <label htmlFor="">Mortgage Amount</label>
          <div className="input-amount">
            <p>£</p>
            <input type="text" />
          </div>
        </div>
        <div className="inputs-calc">
          <div className="card-sect">
            <label htmlFor="">Mortgage Amount</label>
            <div className="input-term">
              <input type="text" />
              <p>years</p>
            </div>
          </div>
          <div className="card-sect">
            <label htmlFor="">Interest Rate</label>
            <div className="input-term">
              <input type="text" />
              <p>%</p>
            </div>
          </div>
        </div>
        <div className="pay-type">
          <label htmlFor="">Mortgage Type</label>
          <div className="payment">
            <div className="dot"></div>
            <div className="text">Repayment</div>
          </div>
          <div className="payment">
            <div className="dot"></div>
            <div className="text">Interest Only</div>
          </div>
          <button className="calculate-repayments">
            <img src={calculator} alt="" /> <p>Calculate Repayments</p>
          </button>
        </div>
      </div>
      <div className="results">
        <h1>Your results</h1>
        <p>
          Your results are shown below based on the information you provided. to
          adjust the results, edit the form and click "calculate repayments"
          again.
        </p>
        <div className="card">
          <p>Your monthly repayments</p>
          <div className="money">£1,797.74</div>
          <div className="total">
            <p>Total you'll rapay over the team</p>
            <div className="total-price">£539,322.94</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
