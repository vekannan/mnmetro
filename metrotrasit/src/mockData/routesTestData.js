export const reoutesData = () => {
    return [
        {
          "route_id": "901",
          "agency_id": 0,
          "route_label": "METRO Blue Line"
        },
        {
          "route_id": "902",
          "agency_id": 0,
          "route_label": "METRO Green Line"
        },
        {
          "route_id": "906",
          "agency_id": 10,
          "route_label": "Airport Shuttle"
        },
        {
          "route_id": "903",
          "agency_id": 0,
          "route_label": "METRO Red Line"
        },
        {
          "route_id": "921",
          "agency_id": 0,
          "route_label": "METRO A Line"
        },
      ]
}

export const routeError = () => {
  return {
    errors : true
  }
}

export const directionData = () => {
  return [
    {
      "direction_id":0,
      "direction_name":"Northbound"
    },
    {
      "direction_id":1,
      "direction_name":"Southbound"
    }
  ]
}

export const stopsData = () => {
  return [
    {
      "place_code":"LIND",
      "description":"MSP Airport Terminal 1 - Lindbergh Station"
    },
    {
      "place_code":"HHTE",
      "description":"MSP Airport Terminal 2 - Humphrey Station"
    }
  ]
}