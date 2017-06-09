import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
  const { currentPad } = this.props;
    return (
      <aside className={`sidebar-container ${currentPad ? 'active' : ''}`}>
        <h2>{'PAD_LABEL'}</h2>
      </aside>
    );
  }
} 

export default Sidebar;
