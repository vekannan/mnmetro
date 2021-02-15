

import React from "react";
import { create } from "react-test-renderer";
import { cleanup } from "@testing-library/react"
import Departures from "../../view/departures"
import { emptyDetaurtureList, departuresWithData } from "../../mockData/departuresTestData"

describe("GIVEN a component Departures", () => {
    afterEach(cleanup);
    describe("WHEN departures param is not passed or undefined", () => {
        test("THEN it should return error message", () => {
            const selectBox = create(<Departures />);
            //console.log(JSON.stringify(selectBox.toJSON()));
            expect(selectBox.toJSON()).toMatchSnapshot();
            expect(selectBox.toJSON().children[0].children[0])
            .toEqual("unable to get the direction for the above selection, try chaning the option")
        });
    });
    describe("WHEN departureList is passed but no departures array", () => {
        test("THEN it should return error message", () => {
            const selectBox = create(<Departures departureList={emptyDetaurtureList()} />);
            //console.log(JSON.stringify(selectBox.toJSON()));
            expect(selectBox.toJSON()).toMatchSnapshot();
            expect(selectBox.toJSON().children[0].children[0])
            .toEqual("unable to get the direction for the above selection, try chaning the option")
        });
    });
    describe("WHEN departureList is passed with data", () => {
        test("THEN it should return departures", () => {
            const selectBox = create(<Departures departureList={departuresWithData()} />);
            //console.log(JSON.stringify(selectBox.toJSON()));
            expect(selectBox.toJSON()).toMatchSnapshot();
            expect(selectBox.toJSON().children[0].children[1].children.length).toEqual(4);
        });
    });

    describe("WHEN departureList is passed with data and set departureExpanded false departureCountToShow is 3", () => {
        test("THEN it should return departures for 3 records", () => { 
            const selectBox = create(<Departures departureList={departuresWithData()} departureExpanded={false} departureCountToShow={3} />);
            //console.log(JSON.stringify(selectBox.toJSON()));
            expect(selectBox.toJSON()).toMatchSnapshot();
            expect(selectBox.toJSON().children[0].children[1].children.length).toEqual(3);
        });
    });
    describe("WHEN departureList is passed with data and set departureExpanded true departureCountToShow leth of object", () => {
        test("THEN it should return departures for 3 records", () => { 
            const selectBox = create(
            <Departures 
                departureList={departuresWithData()} 
                departureExpanded={true} 
                departureCountToShow={departuresWithData().departures.length} />);
            //console.log(JSON.stringify(selectBox.toJSON()));
            expect(selectBox.toJSON()).toMatchSnapshot();
            expect(selectBox.toJSON().children[0].children[1].children.length).toEqual(4);
        });
    });
});