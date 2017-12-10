import React, { PureComponent } from 'react';
import { getFormByType } from './forms'
import _ from 'lodash';

class Sidebar extends PureComponent {
  render() {
    const { currentPad: { conf } } = this.props;
    const validCurrentPad = Object.keys(this.props.currentPad).length;
    return (
      <aside className={`sidebar-container ${ validCurrentPad ? 'active' : ''}`}>
        {
          validCurrentPad ? 
          <div className="form-container">
            {getFormByType(this.props.currentPad)}
          </div>
          : null
        }
      </aside>
    );
  }
} 

export default Sidebar;
