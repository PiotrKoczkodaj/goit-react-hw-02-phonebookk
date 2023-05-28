import { Component } from 'react';
export class Filter extends Component {
  render() {
    const { func } = this.props;

    return (
      <form>
        <label>Find contact</label>
        <input onChange={func}></input>
      </form>
    );
  }
}
