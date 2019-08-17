import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Shipment from './components/Shipments'
import ShipmentDetails from './components/ShipmentDetails'
class App extends React.Component {
  render(){
  return (
    <Router>
      <Route exact path='/' component={Shipment} />
      <Route exact path='/:id' component={ShipmentDetails} />
    </Router>
  );
}
}
export default App;
