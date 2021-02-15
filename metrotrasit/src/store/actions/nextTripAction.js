
import getTransitInfo from '../../dataSource/transitAPI'
export const updateRoutes = (routes) => {
    return { type: 'updateRoutes', routes } 
}

export const updateDirection = (directions, route_id) => {
    return { type: 'updateDirections', directions, route_id } 
}

export const updateStops = (stops, direction_id) => {
    return { type: 'updateStops', stops, direction_id } 
}

export const updateDepartures = (depatures, stop_id) => {
    return { type: 'updateDepartures', depatures, stop_id } 
}


export const fetchDeparture = (route_id,direction_id,stop_id) => {
    return async dispatch => {
        if(route_id && direction_id && stop_id) {
            const response = await getTransitInfo(`${route_id}/${direction_id}/${stop_id}`);
            return dispatch(updateDepartures(response, stop_id));
        } else {
            return dispatch(updateDepartures([], ''));
        }
    }
}

export const fetchStops = (route_id,direction_id) => {
    return async dispatch => {
        if(route_id && direction_id) {
            const response = await getTransitInfo(`stops/${route_id}/${direction_id}`);
            return dispatch(updateStops(response, direction_id));
        } else {
            return dispatch(updateStops([], ''));
        }
    }
}

export const fetchDirection = (route_id) => {
    return async dispatch => {
        if(route_id) {
            const response = await getTransitInfo(`directions/${route_id}`);
            return dispatch(updateDirection(response, route_id));
        } else {
            return dispatch(updateDirection([], ''))
        }
    }
}

export const fetchRoutes = () => {
    return async dispatch => {
        const response = await getTransitInfo('routes');
        return dispatch(updateRoutes(response));
    }
}

