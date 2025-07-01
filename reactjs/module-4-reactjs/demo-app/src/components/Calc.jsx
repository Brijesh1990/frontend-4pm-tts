import React from 'react';
const a = 10;
const b = 20;
const c = a + b;
const d = a - b;
const e = a * b;
const f = a / b;
function Calc() {
  return (
    <>
      <div className="app">
        <h1>
          Additions of Numbers is : <span className="anim">{c}</span>
        </h1>
        <h2>
          Substractions of Numbers is : <span className="anim">{d}</span>
        </h2>
        <h3>
          Multiplications of Numbers is : <span className="anim">{e}</span>
        </h3>
        <h4>
          Divisions of Numbers is :<span className="anim"> {f}</span>
        </h4>
      </div>
    </>
  );
}

export default Calc;
