import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getCarsQuery } from './../queries/queries';
import CarDetails from './CarDetails';

const CarList = () => {
	const [Id, setCar] = React.useState(0);

	const { loading, error, data } = useQuery(getCarsQuery);

	const displayCars = () => {
		if (loading) return <div>Loading Cars...</div>;
		if (error) return <p>Error :(</p>;
		return data.cars.map((car) => {
			return (
				<li key={car._id} onClick={(e) => setCar(car._id)}>
					{car.name}
				</li>
			);
		});
	};

	return (
		<>
			<ul id="carList">{displayCars()}</ul>
			{Id !== 0 && <CarDetails carId={Id}></CarDetails>}
		</>
	);
};

export default CarList;
