import * as actions from '../../../store/actions/nextTripAction'
import getTransitInfo from '../../../dataSource/transitAPI'
import { 
    reoutesData,
    directionData,
    stopsData
} from "../../../mockData/routesTestData"

import {departuresWithData} from '../../../mockData/departuresTestData'

jest.mock('../../../dataSource/transitAPI');
describe('GIVEN nextripAction call is invoked', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })
    describe('WHEN fetchRoutes action is invoked', () => {
        test('THEN it should return fetchRoute action', async () => {
            const dispatch = jest.fn();
            const getState = jest.fn();
            getTransitInfo.mockImplementation(()=>reoutesData())
            await actions.fetchRoutes()(dispatch, getState);
            expect(dispatch).toBeCalledWith({type: "updateRoutes", routes: reoutesData()});
        });
    });

    describe('WHEN fetchDirection action is invoked', () => {
        test('THEN it should return fetchDirection action', async () => {
            const dispatch = jest.fn();
            const getState = jest.fn();
            getTransitInfo.mockImplementation(()=>directionData())
            await actions.fetchDirection('1')(dispatch, getState);
            expect(dispatch).toBeCalledWith({
                type: "updateDirections", 
                directions: directionData(), 
                route_id: "1"});
        });
    })
    describe('WHEN fetchDirection action is invoked without route id', () => {
        test('THEN it should return fetchDirection action with empty object', async () => {
            const dispatch = jest.fn();
            const getState = jest.fn();
            await actions.fetchDirection('')(dispatch, getState);
            expect(dispatch).toBeCalledWith({
                type: "updateDirections", 
                directions: [], 
                route_id: ''});
        });
    })

    describe('WHEN stops action is invoked', () => {
        test('THEN it should return fetchStops action', async () => {
            const dispatch = jest.fn();
            const getState = jest.fn();
            getTransitInfo.mockImplementation(()=> stopsData())
            await actions.fetchStops('1','2')(dispatch, getState);
            expect(dispatch).toBeCalledWith({
                type: "updateStops", 
                stops: stopsData(), 
                direction_id: "2"});
        });
    })
    describe('WHEN stops action is invoked without route id', () => {
        test('THEN it should return stops action with empty object', async () => {
            const dispatch = jest.fn();
            const getState = jest.fn();
            await actions.fetchStops('','')(dispatch, getState);
            expect(dispatch).toBeCalledWith({
                type: "updateStops", 
                stops: [], 
                direction_id: ''});
        });
    })

    describe('WHEN Departure action is invoked', () => {
        test('THEN it should return fetchStops action', async () => {
            const dispatch = jest.fn();
            const getState = jest.fn();
            getTransitInfo.mockImplementation(()=> departuresWithData())
            await actions.fetchDeparture('1','2','3')(dispatch, getState);
            expect(dispatch).toBeCalledWith({
                type: "updateDepartures", 
                depatures: departuresWithData(), 
                stop_id: "3"});
        });
    })
    describe('WHEN Departure action is invoked without route id', () => {
        test('THEN it should return stops action with empty object', async () => {
            const dispatch = jest.fn();
            const getState = jest.fn();
            await actions.fetchDeparture('','','')(dispatch, getState);
            expect(dispatch).toBeCalledWith({
                type: "updateDepartures", 
                depatures: [], 
                stop_id: ''});
        });
    })
});