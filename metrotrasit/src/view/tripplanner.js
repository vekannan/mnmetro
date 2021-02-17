import React, {Fragment,useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    fetchRoutes
} from '../store/actions/nextTripAction'

function TripPlanner() {
const [inputTextVal, setInputTextVal] = useState('');
const [filteredList, setFilteredList] = useState([])

const dispatch = useDispatch();
const routes = useSelector(state => state.routes);
const setStops = e => {
    const val = e.target.value;
    setInputTextVal(val);
    if(inputTextVal.length !== 0){
        setFilteredList(routes.filter(route => 
            route.route_label.toLowerCase().indexOf(inputTextVal.toLowerCase()) !== -1
        ))
    } else {
        setFilteredList([]);
    }
}
useEffect(() => {
    dispatch(fetchRoutes());
}, []);

return(
    <Fragment>
        <input type={"text"} value={inputTextVal} onChange={setStops}/>
        {inputTextVal}
        <div role="list">
            <div>
                {
                    filteredList?.length && (filteredList.map((route,index) => {
                    return (<div className="departure-list" key={index}>
                                    <span>{route.route_label}</span>
                                </div>)
                })) || (<div />)}
            </div>
        </div>
    </Fragment>
 )
}

export default TripPlanner;