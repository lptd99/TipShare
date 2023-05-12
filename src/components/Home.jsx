import React from 'react';

import TipShareTable from './TipShareTable'

const Home = () => {

  return (
    <div>
      <header>
        <span>Welcome to Tip Share</span>
        <button>-</button>
        <button>o</button>
        <button>x</button>
        <div>
          <label for="date">Date:</label>
          <input type="date" id="date" />
          <label for="totalTips">Total Tips:</label>
          <input type="number" />

          <select name="currency" id="currency">
            <option value="usd">USD</option>
            <option value="brl">BRL</option>
          </select>
        </div>
      </header>
      <TipShareTable/>
    </div>
  );
};

export default Home;
