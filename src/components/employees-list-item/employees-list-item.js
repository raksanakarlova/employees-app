import './employees-list-item.css';

const EmployeesListItem = ({name, salary, increase}) => {
	let classNames = 'list-group-item d-flex justify-content-between';
	if(increase) {
		classNames += ' increase'
	}

	return (
		<li className={classNames}>
			<span className="list-group-item-label">{name}</span>
			<input type="text" className="list-group-input" defaultValue={salary + '$'}/>

			<div className="d-flex justify-content-between align-items-center">
				<button type="button" className="btn-cookie btn-sm">
					<i className="fa-solid fa-cookie-bite"></i>
				</button>

				<button type="button" className="btn-delete btn-sm">
					<i className="fa-solid fa-minus"></i>
				</button>
			</div>
		</li>
	);
};

export default EmployeesListItem