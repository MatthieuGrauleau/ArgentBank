export default function FormContainer({ children, onSubmit, title }) {
	return (
		<section className='sign-in-content'>
			<i className='fa fa-user-circle'></i>
			<h1>{title}</h1>
			<form onSubmit={onSubmit}>{children}</form>
		</section>
	);
}
