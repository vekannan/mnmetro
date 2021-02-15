
import React from 'react';

const Departures = props => {

const {
    departureList,
    departureCountToShow,
    showMoreDeparture,
    departureExpanded,
} = props
    return (
			<div className="departure-container">
				{ (departureList?.stops?.length && departureList?.departures?.length) ?
					<div>
						<div className="departure">
                            <div>
							    <h2 className="departure-title">Departures</h2>
                            </div>
							<div className="stop-description">
								<div className="stop-name"><h3>{departureList?.stops[0]?.description}</h3></div>
								<div className="stop-number">Stop {departureList?.stops[0]?.stop_id}</div>
							</div>
						</div>
						<div role='list'>
                            {departureList?.departures?.slice(0, departureCountToShow).map((departure, index) => {
                                return (<div className="departure-list" key={index}>
                                    <div className="route-discription">
                                    <span className="route-id"><strong>{departure.route_id}</strong></span>
                                    <span>{departure.description}</span>
                                    </div>
                                    <div className="depart-time">
                                    {((new Date(departure.departure_time) -new Date()) < 5*60*1000) && 
                                    <span className="blink"></span>}
                                        <strong>{departure.departure_text}</strong>
                                    </div>
                                </div>)
                            })}
                        </div>
						{/* show more/less departure list button */}
						{ departureList.departures.length > 3 && 
							<button className="show-more-button" onClick={showMoreDeparture}>
							<span className={departureExpanded ? 'expand': 'colapsed'}></span>
							Show {departureExpanded ? 'less' : 'more' } departure time
							</button>
				    		}
					</div>
					:
					<div>unable to get the direction for the above selection, try chaning the option</div>
				}
			</div>
		)
}

export default Departures