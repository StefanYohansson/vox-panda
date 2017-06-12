import React, { Component } from 'react';
import _ from 'lodash';

class Sidebar extends Component {
  renderEnvelopeInputs = (envelope, key) => {
    return (
      <div key={key} className="input-group">
        <label htmlFor={key}>{key}</label>
        <input name={key} id={key} className="range-input" type="range" max={100} min={0}/>
      </div>
    );
  }

  render() {
    const validCurrentPad = Object.keys(this.props.currentPad).length;
    const { currentPad: { label, envelope } } = this.props;
    return (
      <aside className={`sidebar-container ${ validCurrentPad ? 'active' : ''}`}>
        {
          validCurrentPad ? 
          <div className="form-container">
            <h2>{label}</h2>
            <form> { _.map(envelope, (attr, key) => this.renderEnvelopeInputs(attr, key)) } </form>
          </div>
          : null
        }
      </aside>
    );
  }
} 

export default Sidebar;
