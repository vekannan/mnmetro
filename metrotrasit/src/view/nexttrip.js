import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'
import { 
    fetchRoutes,
    fetchDirection,
    fetchStops,
    fetchDeparture,
} from '../store/actions/nextTripAction'
import SelectBox from './util/selectbox'
import Departures from './departures'
import '../App.css';

class nexttrip extends Component{

  state = {
    departureCountToShow: 3, 
    departureExpanded: false
  }

  componentDidMount() {
    this.props.updateRoutes();
  }


  onRouteChange = e =>{
    this.props.updateDirection(e.target.value)
  }

  onDirectionChange = e => {
    this.props.updateStop(this.props.route,e.target.value)
  }

  onStopChange = e => {
      this.props.updateDeparture(this.props.route,this.props.direction,e.target.value)
  }

  showMoreDeparture = () => {
    if(this.state.departureCountToShow === 3 ){
      this.setState({
        departureCountToShow: this.props.departures.departures.length,
        departureExpanded: true
      });
    } else {
      this.setState({
        departureCountToShow: 3,
        departureExpanded: false
      });
    }
}

  render() {
    const {
        routes,
        directions,
        stops,
        departures,
        stop
    } = this.props
    return (
      <div className="App">
        <h2 className="page-title">Real-time Departures</h2>
        <div className="selectbox-container">
            { 
            routes?.length 
            ? <Fragment>
                <SelectBox 
                  datas={routes} 
                  val={'route_id'} 
                  label={'route_label'} 
                  changeAction={this.onRouteChange} />
                <SelectBox 
                  datas={directions} 
                  val={'direction_id'} 
                  label={'direction_name'} 
                  changeAction={this.onDirectionChange} />
                <SelectBox 
                  datas={stops} 
                  val={'place_code'} 
                  label={'description'} 
                  changeAction={this.onStopChange} />
              </Fragment>
            : (routes?.errors && <div>We are unable to get the desired route option for you to select, Kindly try again after some time</div>) 
            }
        </div>
        {stop && 
              <Departures
                departureList = {departures}
                showMoreDeparture = {this.showMoreDeparture}
                departureCountToShow = {this.state.departureCountToShow}
                departureExpanded = {this.state.departureExpanded} 
              />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateRoutes: () => dispatch(fetchRoutes()),
    updateDirection: (route_id) => dispatch(fetchDirection(route_id)),
    updateStop: (route_id, direction_id) => dispatch(fetchStops(route_id,direction_id)),
    updateDeparture: (route_id, direction_id, stop_id) => dispatch(fetchDeparture(route_id,direction_id,stop_id))
  }
}

const mapStateToProps = state => {
  return {
    routes: state.routes,
    directions: state.directions,
    stops:state.stops,
    departures: state.departures,
    route: state.route,
    direction: state.direction,
    stop:state.stop,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(nexttrip);
