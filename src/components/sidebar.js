import React, { PureComponent } from 'react';
import _ from 'lodash';
import { getFormByType } from 'vox/components/forms'

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
