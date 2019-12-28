import React from 'react';
import FbContext from '../contexts/FbContext';

const FireBoard = (props) => {
	const context  = React.useContext(FbContext);
	React.useEffect(()=>{
		console.log(context)
	}, [])
	const fbKey = {"key":"e247d5bd7319548635cfcc946f2566e27ab3e61c"}
	return (
			<React.Fragment>
			{context.map(probe => (
				<div className='row' key={probe.channel}>
				<ul className="list-group">
					<li className={`list-group-item ${probe.channel == 1 ? 'list-group-item-danger' : 'list-group-item-success'}`}>
					{probe.channel == 1 ? 'Grill Temp' : 'Meat Temp'}
					</li>
					<li className="list-group-item">Temp: {probe.temp}F</li>
				</ul>
				</div>
			))}
		</React.Fragment>
		
	)
}

export default FireBoard;