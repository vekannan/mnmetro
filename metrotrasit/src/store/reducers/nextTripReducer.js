const initState = {
    departures: [],
    direction: '',
    directions: [],
    route:'',
    routes: [],
    stop:'',
    stops: [],
}

const reducer = (state = initState, action = {}) => {

    const newState = {...state}
    const {
        depatures = [],
        direction_id = '',
        directions = [],
        route_id = '',
        routes = [],
        stop_id = '',
        stops = [],
        type = '',
    } = action;
    switch(type) {
        case 'updateRoutes':
            newState.departures = depatures;
            newState.direction = direction_id;
            newState.directions = directions;
            newState.route = route_id;
            newState.routes = routes;
            newState.stop = stop_id;
            newState.stops = stops;
          break;
        case 'updateDirections':
            newState.departures = depatures;
            newState.direction = direction_id;
            newState.directions = directions;
            newState.route = route_id;
            newState.stop = stop_id;
            newState.stops = stops;
          break;
        case 'updateStops':
            newState.departures = depatures;
            newState.direction = direction_id;
            newState.stop = stop_id;
            newState.stops = stops;
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