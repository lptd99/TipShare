import React from 'react';

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

          <label for="currency">Choose currency:</label>
          <select name="currency" id="currency">
            <option value="dollars">USD</option>
            <option value="reais">RS</option>
          </select>
        </div>
      </header>
      <table border="5px">
        <tr align="center">
          <th>Group</th>
          <th>Ratio (%)</th>
          <th>Group Tip</th>
          <th>Group Total Hours</th>
          <th>Person</th>
          <th>Hours</th>
          <th>Personal Tip</th>
        </tr>
        <tr align="center">
          <td>Support</td>
          <td>20</td>
          <td>50.00</td>
          <td>4.00</td>
          <td>
            <table>
              <tr>
                <td>jose</td>
              </tr>
              <tr>
                <td>rubens</td>
              </tr>
            </table>
          </td>
          <td>
            <table>
              <tr>
                <td>10</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
            </table>
          </td>
          <td>
            <table>
              <tr>
                <td>5</td>
              </tr>
              <tr>
                <td>9</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr align="center">
          <td>Servers</td>
          <td>70</td>
          <td>50.00</td>
          <td>4.00</td>
          <td>
            <table>
              <tr>
                <td>joao</td>
              </tr>
              <tr>
                <td>maria</td>
              </tr>
            </table>
          </td>
          <td>
            <table>
              <tr>
                <td>6</td>
              </tr>
              <tr>
                <td>8</td>
              </tr>
            </table>
          </td>
          <td>
            <table>
              <tr>
                <td>5</td>
              </tr>
              <tr>
                <td>9</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr align="center">
          <td>Captain</td>
          <td>0.00</td>
          <td>43</td>
          <td>0</td>
          <td>
            <table>
              <tr>
                <td>joao</td>
              </tr>
              <tr>
                <td>maria</td>
              </tr>
            </table>
          </td>
          <td>
            <table>
              <tr>
                <td>6</td>
              </tr>
              <tr>
                <td>8</td>
              </tr>
            </table>
          </td>
          <td>
            <table>
              <tr>
                <td>5</td>
              </tr>
              <tr>
                <td>9</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr align="center">
          <td>Others</td>
          <td>20.00</td>
          <td>50.00</td>
          <td>4.00</td>
          <td>
            <table>
              <tr>
                <td>joao</td>
              </tr>
              <tr>
                <td>maria</td>
              </tr>
            </table>
          </td>
          <td>
            <table>
              <tr>
                <td>6</td>
              </tr>
              <tr>
                <td>8</td>
              </tr>
            </table>
          </td>
          <td>
            <table>
              <tr>
                <td>5</td>
              </tr>
              <tr>
                <td>9</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Home;
