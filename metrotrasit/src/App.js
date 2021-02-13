import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchRoutes } from './store/actions/nextTripAction'
import './App.css';

class App extends Component{
  componentDidMount() {
    this.props.loadNextTrip();
  }
  handleRoutChange = (event) => {
  }
  render() {
    const routeData = this.props.routes 
    return (
      <div className="App">
        <h1>About venkatesan</h1>
        <div>
          <div>Venkat age is <span>{this.props.age}</span></div>
          <button onClick={this.props.onAgeUp}>Age up</button>
          <button onClick={this.props.onAgeDown}>Age down</button>
        </div>
        { routeData.length ?
          <select className="select-box" onChange={(e) => this.handleRoutChange(e)}>
            <option>Select route</option>
            { routeData.map(route => <option key={route.route_id} value={route.route_id}>{route.route_label}</option>)}
          </select> :
          (routeData.errors && <div>We are unable to get the desired route option for you to select, Kindly try again after some time</div>) 
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadNextTrip: () => dispatch(fetchRoutes())
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    routes: state.routes
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
