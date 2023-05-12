import React from 'react';

const TipShareTable = () => {

    return (
        <div>
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
          <td> Servers </td>
          <td> 70 </td>
          <td> 50.00 </td>
          <td> 4.00 </td>
          <td> joao </td>
          <td> 6 </td>
          <td> 9 </td>
        </tr>
        <tr align="center">
          <td> Captain </td>
          <td> 0.00 </td>
          <td> 43 </td>
          <td> 0 </td>
          <td> maria </td>
          <td> 9 </td>
          <td> 8 </td>
        </tr>
        <tr align="center">
          <td> Others </td>
          <td> 20.00 </td>
          <td> 50.00 </td>
          <td> 4.00 </td>
          <td> joao </td>
          <td> 6 </td>
          <td> 9 </td>
        </tr>
      </table>
        </div>
    );
};

export default TipShareTable;