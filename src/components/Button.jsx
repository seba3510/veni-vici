function Button({ buttonID, catAttribute, handleClick }) {

	return (

		<>

			<button
				id={buttonID}
				onClick={handleClick}
			>
				{catAttribute}
			</button>

		</>

	);

} // Button()

//======================================================

export { Button };