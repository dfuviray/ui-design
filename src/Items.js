import React from 'react';

class Items extends React.Component {
  renderItems() {
    const { items } = this.props;
    return items.map((item) => (
      <div key={item.id} className={`item ${item.active ? 'active' : ''}`}>
        {item.name}
      </div>
    ));
  }

  render() {
    return <div className="itemContainer">{this.renderItems()}</div>;
  }
}

export default Items;
