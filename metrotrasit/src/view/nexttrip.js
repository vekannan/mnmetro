import React, {Fragment, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { 
    fetchDeparture,
    fetchDirection,
    fetchRoutes,
    fetchStops,
} from '../store/actions/nextTripAction'
import SelectBox from './util/selectbox'
import Departures from './departures'
import '../App.css';

function NextTrip() {

  
  const localConst = {
    defaultRoutesText: 'Select route',
    defaultDirectionText: 'Select direction',
    defaultStopText: 'Select stop',
    title: 'Real-time Departures'
  }
  const [departureCountToShow, setDepartureCountToShow] = useState(3);
  const [departureExpanded, setDepartureExpanded] = useState(false);
  const dispatch = useDispatch();
  const departures = useSelector(state => state.departures);
  const directions= useSelector(state =>state.directions);
  const routes = useSelector(state =>state.routes);
  const stop = useSelector(state =>state.stop);
  const stops= useSelector(state =>state.stops);
  const direction = useSelector(state => state.direction);
  const route = useSelector( state => state.route);

  const onRouteChange = e =>{
    dispatch(fetchDirection(e.target.value));
  }

  const onDirectionChange = e => {
    dispatch(fetchStops(route,e.target.value));
  }

  const onStopChange = e => {
    dispatch(fetchDeparture(route,direction,e.target.value));
  }

  const updateDeparture = async () => {
    if(route && direction && stop) {
      dispatch(fetchDeparture(route,direction,stop));
    }
  }

  useEffect(() => {
    dispatch(fetchRoutes());
    setInterval(updateDeparture, 60000);
  },[])

  const showMoreDeparture = () => {
    if(departureCountToShow === 3 ){
      setDepartureCountToShow(departures.departures.length);
      setDepartureExpanded(true);
    } else {
        setDepartureCountToShow(3)
        setDepartureExpanded(false)
    }
}
  return(
    <div>
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
                  changeAction={onRouteChange}
                  defaultText={localConst.defaultRoutesText}/>
                <SelectBox 
                  datas={directions} 
                  val={'direction_id'} 
                  label={'direction_name'} 
                  changeAction={onDirectionChange} 
                  defaultText={localConst.defaultDirectionText}/>
                <SelectBox 
                  datas={stops} 
                  val={'place_code'} 
                  label={'description'} 
                  changeAction={onStopChange} 
                  defaultText={localConst.defaultStopText}/>
              </Fragment>
            : (routes?.errors && <div>We are unable to get the desired route option for you to select, Kindly try again after some time</div>) 
            }
        </div>
        {stop && 
              <Departures
                departureList = {departures}
                showMoreDeparture = {showMoreDeparture}
                departureCountToShow = {departureCountToShow}
                departureExpanded = {departureExpanded} 
              />}
      </div>
    </div>
  )

}

export default NextTrip;