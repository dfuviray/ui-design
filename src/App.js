import React from 'react';

import './App.css';
import Items from './Items';
import Footer from './Footer';

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: 'Blood Glucose', active: true },
      { id: 2, name: 'Medication' },
      { id: 3, name: 'Food Tracking' },
      { id: 4, name: 'Exercise' },
      { id: 5, name: 'Weight Management' },
      { id: 6, name: 'Blood Pressure' },
      { id: 7, name: 'A1C' },
    ],
    pages: [
      { id: 1, path: 'component1' },
      { id: 2, path: 'component2' },
      { id: 3, path: 'component1' },
      { id: 4, path: 'component1' },
      { id: 5, path: 'component1', active: true },
    ],
  };
  render() {
    return (
      <div className="container">
        <h1 className="title">What are your main areas of focus?</h1>
        <p className="subtitle">
          This will help us build a personalized experience for you
        </p>

        <Items items={this.state.items} />
        <Footer pages={this.state.pages} />
      </div>
    );
  }
}

export default App;
