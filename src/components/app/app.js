import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emloyees-list/employees-list';
import EmployeeForm from '../employees-add-form/employees-add-form';

function App () {
	const data = [
		{name: 'John Wick', salary: 2000, increase: false},
		{name: 'John Smith', salary: 950, increase: true},
		{name: 'John Constantine', salary: 3000, increase: false}
	];

	return (
		<div className="app">
			<AppInfo />

			<div className='search-panel'>
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeesList data={data} />
			<EmployeeForm />
		</div>
	);
}

export default App;