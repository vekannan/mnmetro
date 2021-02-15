export const emptyDetaurtureList = () => {
    return {
        "stops": [
          {
            "stop_id": 51419,
            "latitude": 44.880787,
            "longitude": -93.204983,
            "description": "Terminal 1 Lindbergh Station"
          }
        ],
        "departures": []
      }
}

export const departuresWithData = () => {
  return {
    "stops": [
      {
        "stop_id": 56877,
        "latitude": 44.853805,
        "longitude": -93.238300,
        "description": "MOA Transit Station Gate E"
      }
    ],
    "departures": [
      {
        "actual": true,
        "trip_id": "17827601-DEC20-MVS-BUS-Sunday-01",
        "stop_id": 56877,
        "departure_text": "18 Min",
        "departure_time": 1613317560,
        "description": "Apple Valley",
        "gate": "E",
        "route_id": "903",
        "route_short_name": "Red",
        "direction_id": 1,
        "direction_text": "SB",
        "schedule_relationship": "Scheduled"
      },
      {
        "actual": false,
        "trip_id": "17827599-DEC20-MVS-BUS-Sunday-01",
        "stop_id": 56877,
        "departure_text": "10:16",
        "departure_time": 1613319360,
        "description": "Apple Valley",
        "gate": "E",
        "route_id": "903",
        "route_short_name": "Red",
        "direction_id": 1,
        "direction_text": "SB",
        "schedule_relationship": "Scheduled"
      },
      {
        "actual": false,
        "trip_id": "17827598-DEC20-MVS-BUS-Sunday-01",
        "stop_id": 56877,
        "departure_text": "10:46",
        "departure_time": 1613321160,
        "description": "Apple Valley",
        "gate": "E",
        "route_id": "903",
        "route_short_name": "Red",
        "direction_id": 1,
        "direction_text": "SB",
        "schedule_relationship": "Scheduled"
      },
      {
        "actual": false,
        "trip_id": "17827602-DEC20-MVS-BUS-Sunday-01",
        "stop_id": 56877,
        "departure_text": "11:16",
        "departure_time": 1613322960,
        "description": "Apple Valley",
        "gate": "E",
        "route_id": "903",
        "route_short_name": "Red",
        "direction_id": 1,
        "direction_text": "SB",
        "schedule_relationship": "Scheduled"
      }
    ]
  }
}