import React from 'react';
import { Table } from 'reactstrap';
import './MobileStatsTable.css';

export default class MobileStatsTable extends React.Component {
  render() {
    return (
      <div className="mobileStatsTable">
      <Table striped>
        <thead>
          <tr>
            <th><strong>2018 Mobile Marketing Statistics</strong></th>
            {/* <th>Statistic</th>
            <th>Credit</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Worldwide, more people own a cell phone than a toothbrush. 
              <br></br>
              <i>-Consumer Technology Association</i>
            </th>
          </tr>

          <tr>
            <th scope="row">90% of smartphone owners use their phones while making purchasing decisions in a brick and mortar store.
              <br></br>
              <i>-Greg Sterling, Marketing Land</i>
            </th>
          </tr>
          <tr>
            <th scope="row">3</th>
            {/* <td>Larry</td>
            <td>the Bird</td> */}
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}