import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'
import { 
    fetchDeparture,
    fetchDirection,
    fetchRoutes,
    fetchStops,
} from '../store/actions/nextTripAction'
import SelectBox from './util/selectbox'
import Departures from './departures'
import '../App.css';

class nexttrip extends Component{

  state = {
    departureCountToShow: 3, 
    departureExpanded: false
  }

  constructor(props) {
    super(props)
    this.updateDeparture = this.updateDeparture.bind(this)
  }

  componentDidMount() {
    this.props.updateRoutes();
    setInterval(this.updateDeparture, 60000)
  }


  onRouteChange = e =>{
    this.props.updateDirection(e.target.value);
  }

  onDirectionChange = e => {
    this.props.updateStop(this.props.route,e.target.value);
  }

  onStopChange = e => {
      this.props.updateDeparture(this.props.route,this.props.direction,e.target.value);
  }

  async updateDeparture() {
    if(this.props.route && this.props.direction && this.props.stop) {
      this.props.updateDeparture(this.props.route,this.props.direction,this.props.stop);
    }
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
        departures,
        directions,
        routes,
        stop,
        stops,
    } = this.props
    const localConst = {
      defaultRoutesText: 'Select route',
      defaultDirectionText: 'Select direction',
      defaultStopText: 'Select stop',
      title: 'Real-time Departures'
    }
    return (
      <div className="App">
        <h2 className="page-title">{localConst.title}</h2>
        <div className="selectbox-container">
            { 
            routes?.length 
            ? <Fragment>
                <SelectBox 
                  datas={routes} 
                  val={'route_id'} 
                  label={'route_label'} 
                  changeAction={this.onRouteChange}
                  defaultText={localConst.defaultRoutesText}/>
                <SelectBox 
                  datas={directions} 
                  val={'direction_id'} 
                  label={'direction_name'} 
                  changeAction={this.onDirectionChange} 
                  defaultText={localConst.defaultDirectionText}/>
                <SelectBox 
                  datas={stops} 
                  val={'place_code'} 
                  label={'description'} 
                  changeAction={this.onStopChange} 
                  defaultText={localConst.defaultStopText}/>
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
    departures: state.departures,
    direction: state.direction,
    directions: state.directions,
    route: state.route,
    routes: state.routes,
    stop:state.stop,
    stops:state.stops,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(nexttrip);
