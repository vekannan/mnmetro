const initState = {
    routes: [],
    directions: [],
    stops: [],
    departures: [],
    route:'',
    direction: '',
    stop:'',
    
}

const reducer = (state = initState, action) => {

    const newState = {...state}
    const {
        type = '',
        routes = [],
        directions = [],
        stops = [],
        depatures = [],
        route_id = '',
        direction_id = '',
        stop_id = ''
    } = action;
    switch(type) {
        case 'updateRoutes':
            newState.routes = routes;
            newState.directions = directions;
            newState.stops = stops;
            newState.departures = depatures;
            newState.route = route_id;
            newState.direction = direction_id;
            newState.stop = stop_id;
          break;
        case 'updateDirections':
            newState.directions = directions;
            newState.stops = stops;
            newState.departures = depatures;
            newState.route = route_id;
            newState.direction = direction_id;
            newState.stop = stop_id;
          break;
        case 'updateStops':
            newState.stops = stops;
            newState.departures = depatures;
            newState.direction = direction_id;
            newState.stop = stop_id;
          break;
        case 'updateDepartures':
            newState.departures = depatures;
            newState.stop = stop_id;
          break;
        default:
          break;
      }
    return newState;
}

export default reducer;