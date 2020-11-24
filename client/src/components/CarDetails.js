import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getCarQuery } from './../queries/queries';

const CarDetails = ({ carId }) => {
	const { loading, error, data } = useQuery(getCarQuery, {
		variables: { _id: carId },
	});

	const getCarDetails = () => {
		if (loading) return <p>Loading car details...</p>;
		if (error) return <p>Error :(</p>;
		const { car } = data;
		if (car) {
			return (
				<div>
					<h2>{car.name}</h2>
					<p>model : {car.model}</p>
					<p>company : {car.company}</p>
					<p>owner : {car.owner.name}</p>
					<p>All cars by this owner :</p>
					<ul>
						{car.owner.cars.map((item) => {
							return <li key={item._id}>{item.name}</li>;
						})}
					</ul>
				</div>
			);
		} else {
			return <div>No Car Selected</div>;
		}
	};

	return <div id="carDetails">{getCarDetails()}</div>;
};

export default CarDetails;
