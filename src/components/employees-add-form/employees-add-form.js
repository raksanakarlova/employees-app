import './employees-add-form.css'

const EmployeeForm = () => {
	return (
		<div className="app-add-form">
			<h3>Добавить нового сотрудника:</h3>

			<form className="add-form d-flex">
				<input className="form-control input-add-form" type="text" placeholder="Введите имя..."/>
				<input className="form-control input-add-form" type="text" placeholder="Введите з/п..." />
				<button className="btn btn-outline-light" type="submit">Добавить</button>
			</form>
		</div>
	)
};

export default EmployeeForm