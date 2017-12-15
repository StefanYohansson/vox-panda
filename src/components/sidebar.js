import React, { PureComponent } from 'react';
import _ from 'lodash';
import ClickOutside from 'react-click-outside';
import { getFormByType } from 'vox/components/forms'
import { setCurrent } from 'vox/actions/actions';

class Sidebar extends PureComponent {
  render() {
    const { currentPad, currentPad: { conf }, dispatch } = this.props;
    const validCurrentPad = Object.keys(this.props.currentPad).length;
    return (
      <ClickOutside onClickOutside={() => dispatch(setCurrent())}>
        <aside className={`sidebar-container ${ validCurrentPad ? 'active' : ''}`}>
          {
            validCurrentPad ?
            <div className="form-container">
              {getFormByType(currentPad, dispatch)}
            </div>
            : null
          }
        </aside>
      </ClickOutside>
    );
  }
} 

export default Sidebar;
