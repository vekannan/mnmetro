
import React from "react";
import { create } from "react-test-renderer";
import { cleanup } from "@testing-library/react"
import SelectBox from '../../../view/util/selectbox'

describe("GIVEN SelectBox", () => {

    afterEach(cleanup);
    
    describe('WHEN data is not passed', () => {
        test("THEN it should return empty div", () => {
            const selectBox = create(<SelectBox />);
            expect(selectBox.toJSON()).toMatchSnapshot();
        });
    });

    describe('WHEN object is passed', () => {
        test("THEN it should return all select elements", () => {
            const data = [
                {
                    'key1': 'key1',
                    'val1': 'val1'
                },
                {
                    'key1': 'key2',
                    'val1': 'val2'
                },
                {
                    'key1': 'key3',
                    'val1': 'val3'
                }
            ]
            const selectBox = create(
            <SelectBox datas={data} val={'key1'} 
            label={'val1'}
            changeAction={()=> {}} />);
            expect(selectBox.toJSON()).toMatchSnapshot();
            expect(selectBox.toJSON().children[0].children.length).toBe(4);
        });
    });
    describe('WHEN object is passed with invalid param', () => {
        test("THEN it should return all select elements", () => {
            const data = [
                {
                    'key1': 'key1',
                    'val1': 'val1'
                },
                {
                    'key1': 'key2',
                    'val1': 'val2'
                },
                {
                    'key1': 'key3',
                    'val1': 'val3'
                }
            ]
            const selectBox = create(
            <SelectBox datas={data} val={'key12'} 
            label={'val12'}
            changeAction={()=> {}} />);
            expect(selectBox.toJSON()).toMatchSnapshot();
            expect(selectBox.toJSON().children[0].children.length).toBe(1);
        });
    });
    
});