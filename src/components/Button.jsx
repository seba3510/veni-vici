function Button(
	{
		buttonID,
		catAttribute,
		handleClick
	}) {


	const isWeight =
		(buttonID === "weight");

	return (

		<>

			{(isWeight) ? (
				<button
					id={buttonID}
					onClick={handleClick}>
					{catAttribute} lbs
				</button>
			) : (
				<button
					id={buttonID}
					onClick={handleClick}
				>
					{catAttribute}
				</button>
			)}
		</>

	);

} // Button()

//======================================================

export { Button };