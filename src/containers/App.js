import React, {Component} from 'react';
import CardList from '../components/CardList';
import cars from '../components/cars';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';


class App extends Component {
	constructor () {
		super()
		this.state = {
			cars: cars,
			searchField: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	render () {
		const {cars, searchField} = this.state;
		const filteredCars = cars.filter(car => {
		return car.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='f1'>CarFriends</h1>
				<SearchBox searchChange = {this.onSearchChange} />
				<Scroll>
					<CardList cars={filteredCars} />
				</Scroll>
			</div>
		);	
	}
}
export default App;