import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data}) => {
	const elements = data.map(element => {
		return (
			<EmployeesListItem name={element.name} salary={element.salary} increase={element.increase} />
		)
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
};

export default EmployeesList