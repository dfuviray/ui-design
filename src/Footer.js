import React from 'react';

class Footer extends React.Component {
  renderPages = () => {
    const { pages } = this.props;
    return pages.map((page) => {
      return (
        <li key={page.id} className={`${page.active ? 'active' : ''}`}></li>
      );
    });
  };
  render() {
    return (
      <div className="footerContainer">
        <a href="#back">back</a>
        {<ul className="pages">{this.renderPages()}</ul>}
        <a href="#home"> home</a>
      </div>
    );
  }
}

export default Footer;
