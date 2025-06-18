function Button(
	{
		buttonID,
		catAttribute,
		handleClick
	}) {

	const isWeight =
		(buttonID === "weight");

	//=========================================================

	return (

		<>

			<button
				id={buttonID}
				onClick={() => handleClick(catAttribute)}
			>

				{
					(isWeight) ? `${catAttribute} lbs`
						: catAttribute
				}

			</button>


		</>

	);

} // Button()

//======================================================

export { Button };