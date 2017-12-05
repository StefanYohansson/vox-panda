import React, { PureComponent } from 'react';
import { getFormByType } from './forms'
import _ from 'lodash';

class Sidebar extends PureComponent {
  render() {
    const validCurrentPad = Object.keys(this.props.currentPad).length;
    const { currentPad: { padType, label } } = this.props;
    return (
      <aside className={`sidebar-container ${ validCurrentPad ? 'active' : ''}`}>
        {
          validCurrentPad ? 
          <div className="form-container">
            <h2>{label}</h2>
            {getFormByType(padType)}
          </div>
          : null
        }
      </aside>
    );
  }
} 

export default Sidebar;
