import React from 'react';
import { ad, subs, dv } from './CalcLogic';
import calcimg from '../assets/images/calc.gif';
function CalcApp() {
  return (
    <>
      <div className="app">
        <div className="clc">
          <button type="button" id="btn" onClick={ad}>
            Additions
          </button>

          <button type="button" id="btn" onClick={subs}>
            Substractions
          </button>

          <button type="button" id="btn" onClick={dv}>
            Divisions
          </button>
        </div>

        <div className="clcimg">
          <img src={calcimg} alt="img" />
        </div>
      </div>
    </>
  );
}

export default CalcApp;
