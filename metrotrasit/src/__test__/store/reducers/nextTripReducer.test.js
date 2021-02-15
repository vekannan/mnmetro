import reducer from '../../../store/reducers/nextTripReducer'
import { 
    directionData,
    reoutesData,
    stopsData,
} from "../../../mockData/routesTestData"

import {departuresWithData} from '../../../mockData/departuresTestData'



describe('GIVEN reducers', () => {
    const initState = {
        departures: [],
        direction: '',
        directions: [],
        route:'',
        routes: [],
        stop:'',
        stops: [],
        
    }
    describe('WHEN nextripReducers invoked with updateRoutes type', () => {
        test('THEN it should return routes data', () => {
            const input_action = {
                type: 'updateRoutes',
                routes: reoutesData(), 
              };
              const expectedResult = {
                  ...initState,
                  routes: reoutesData(),
              }
              expect(reducer({}, input_action)).toEqual(expectedResult);
        })
    })
    describe('WHEN nextripReducers invoked with updateDirections', () => {
        test('THEN it should return Directions data', () => {
            const input_action = {
                type: 'updateDirections',
                directions: directionData(),              };
              const expectedResult = {
                  directions: directionData()
              }
              expect(reducer({}, input_action)).toMatchObject(expectedResult);
        })
    })

    describe('WHEN nextripReducers invoked with updateStops', () => {
        test('THEN it should return Stops data', () => {
            const input_action = {
                type: 'updateStops',
                stops: stopsData(), 
              };
              const expectedResult = {
                stops: stopsData()
              }
              expect(reducer({}, input_action)).toMatchObject(expectedResult);
        })
    })

    describe('WHEN nextripReducers invoked with updateDepartures', () => {
        test('THEN it should return departures data', () => {
            const input_action = {
                type: 'updateDepartures',
                departures: departuresWithData().departures,
              };
              const expectedResult = {
              }
              expect(reducer({}, input_action)).toMatchObject(expectedResult);
        })
    })

    describe('WHEN nextripReducers invoked with empty', () => {
        test('THEN it should return default state', () => {
            const input_action = {
                type: '',
              };
              const expectedResult = {
              }
              expect(reducer({}, input_action)).toMatchObject(expectedResult);
        })
    })

    describe('WHEN nextripReducers invoked with null state', () => {
        test('THEN it should return default state', () => {
              expect(reducer()).toMatchObject({});
        })
    })
})