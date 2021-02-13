
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
    return dispatch => {
        (route_id && direction_id && stop_id)
        ? getTransitInfo(`${route_id}/${direction_id}/${stop_id}`).then(depatures => {
            dispatch(updateDepartures(depatures, stop_id))
        })
        :  dispatch(updateDepartures([], ''))
    }
}

export const fetchStops = (route_id,direction_id) => {
    return dispatch => {
        (route_id && direction_id)
        ? getTransitInfo(`stops/${route_id}/${direction_id}`).then(stops => {
            dispatch(updateStops(stops, direction_id))
        })
        : dispatch(updateStops([], ''))
    }
}

export const fetchDirection = (route_id) => {
    return dispatch => {
            route_id 
            ? getTransitInfo(`directions/${route_id}`).then(directions => {
                dispatch(updateDirection(directions, route_id));
            })
            : dispatch(updateDirection([], ''));
    }
}

export const fetchRoutes = () => {
    return dispatch => {
        getTransitInfo('routes').then(routes => {
            dispatch(updateRoutes(routes))
        })
    }
}

const getTransitInfo = (payload) => {
    const url = `https://svc.metrotransit.org/nextripv2/${payload}`
    return fetch(url).then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        console.error(error);
        return error
    })
}