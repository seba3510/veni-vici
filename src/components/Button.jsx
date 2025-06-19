function Button(
	{
		buttonID,
		catAttribute,
		handleClick
	}) {

	const isWeight =
		(buttonID === "weight");

	const isLifeSpan =
		(buttonID === "life-span");

	//=========================================================

	return (

		<>

			<button
				id={buttonID}
				onClick={() => handleClick(catAttribute)}
			>

				{
					(isWeight) ? `${catAttribute} lbs`
						: (isLifeSpan) ? `${catAttribute} years`
							: catAttribute
				}

			</button>


		</>

	);

} // Button()

//======================================================

export { Button };