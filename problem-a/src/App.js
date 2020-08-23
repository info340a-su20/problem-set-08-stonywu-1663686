import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

export class App extends React.Component {
  render() {
    let senators = this.props.senators;
    return (
      <div className="container">
        <h1>
        US Senators 2019
        </h1>
        <SenatorTable senators={senators}/>
      </div>
    );
  }
}

export class SenatorTable extends React.Component {
  render() {
    let senatorRows = [];
    let senators = this.props.senators;
    for (let each of senators) {
      senatorRows.push((<SenatorRow key={each.name} senator={each}/>));
    }
    return (
      <table className="table table-bordered">
        <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']} />
        <tbody>
          {senatorRows}
        </tbody>
      </table>
    );
  }
}

export class TableHeader extends React.Component {
  render() {
    let headCols = this.props.cols;
    return (
      <thead>
        <tr>
          {headCols.map(colsTh)}
        </tr>
      </thead>
    );
  }
}

export class SenatorRow extends React.Component {
  render() {
    let senator = this.props.senator;
    return (
      <tr>
        <td>
          {senator.name}
        </td>
        <td>
          {(senator.party.substring(0, 1) + " - " + senator.state)}
        </td>
        <td>
          <a href={"tel:" + senator.phone}>{senator.phone}</a>
        </td>
        <td>
        <a href={"https://twitter.com/" + senator.twitter}>{"@" + senator.twitter}</a>
        </td>
      </tr>
    );
  }
}

function colsTh(col) {
  return (<th key={col}>{col}</th>);
}