import React from "react";
import { Provider } from 'react-redux';
import { create } from "react-test-renderer";
import thunk from 'redux-thunk';
import { render,fireEvent, cleanup } from "@testing-library/react"
import configureStore from 'redux-mock-store';
import NextTrip from "../../view/nexttrip"
import { 
    reoutesData,
    routeError,
    directionData,
    stopsData
} from "../../mockData/routesTestData"
import { departuresWithData } from '../../mockData/departuresTestData'


const mockStore = configureStore([thunk]);

describe("GIVEN a component NextTrip", () => {
    let store;
    let component;
 
    beforeEach(() => {
      store = mockStore({
      });
      component = create(
        <Provider store={store}>
          <NextTrip />
        </Provider>
      );
    });
    afterEach(cleanup);
    describe("WHEN NextTrip is invoked", () => {
        test("THEN it should return headers information only", () => {
            expect(component.toJSON()).toMatchSnapshot();
            expect(component.toJSON().children[0].children[0])
            .toEqual("Real-time Departures");
            expect(component.root.findAllByType('select').length).toEqual(0);
        });
    });
    describe("WHEN NextTrip is invoked data", () => {
        test("THEN it should return SelectBox", () => {
            store = mockStore({
                routes: reoutesData(),
                departureList: departuresWithData()

            });
            component = create(
                <Provider store={store}>
                  <NextTrip />
                </Provider>
              );
            expect(component.toJSON()).toMatchSnapshot();
            expect(component.root.findAllByType('select').length).toEqual(1);
        });
    });
    describe("WHEN NextTrip is invoked with error response on routes", () => {
        test("THEN it should return error", () => {
            store = mockStore({
                routes: routeError()
            });
            component = create(
                <Provider store={store}>
                  <NextTrip />
                </Provider>
              );
            expect(component.toJSON()).toMatchSnapshot();
            expect(component.root.findAllByType('select').length).toEqual(0);
        });
    });

    describe("WHEN routes is in the store", () => {
        test("THEN it should show routes SelectBox", () => {
            store = mockStore({
                routes: reoutesData()
            });
            
            component = create(
                <Provider store={store}>
                  <NextTrip />
                </Provider>
              );
            const select = component.root.find(
                (el) => el.type === 'select');
            select.props.onChange({
                target: { value: '901' }
            });
            
            expect(component.toJSON()).toMatchSnapshot();

            expect(component.root.findAllByType('select').length).toEqual(1);
        });
    });
    describe("WHEN direction is on the store", () => {
        test("THEN it should show direction SelectBox", () => {
            store = mockStore({
                routes: reoutesData(),
                route:1,
                directions: directionData()
            });
            
            component = create(
                <Provider store={store}>
                  <NextTrip />
                </Provider>
              );
            const select = component.root.findAllByType('select')[1]
            select.props.onChange({
                target: { value: '1' }
            });
            
            expect(component.toJSON()).toMatchSnapshot();

            expect(component.root.findAllByType('select').length).toEqual(2);
        });
    });
    describe("WHEN Stops is on the store", () => {
        test("THEN it should show stops", () => {
            store = mockStore({
                routes: reoutesData(),
                route:1,
                directions: directionData(),
                direction: 1,
                stops: stopsData()
            });
            
            component = create(
                <Provider store={store}>
                  <NextTrip />
                </Provider>
              );
            const select = component.root.findAllByType('select')[2]
            select.props.onChange({
                target: { value: '1' }
            });
            
            expect(component.toJSON()).toMatchSnapshot();

            expect(component.root.findAllByType('select').length).toEqual(3);
        });
    });

    describe("WHEN Departures is on the store", () => {
        test("THEN it should show departures", () => {
            store = mockStore({
                routes: reoutesData(),
                route: 1,
                directions: directionData(),
                direction: 1,
                stops: stopsData(),
                departures: departuresWithData(),
                stop:1
            });
            
            const { getByText } = render(
            <Provider store={store}>
                <NextTrip />
            </Provider>);
            fireEvent.click(getByText(/Show more departure time/i));
            const showLess = getByText(/Show less departure time/i);
            fireEvent.click(getByText(/Show less departure time/i));
            const showMore= getByText(/Show more departure time/i);
            expect(showLess).toBeInTheDocument();
            expect(showMore).toBeInTheDocument();
        });
    });
});