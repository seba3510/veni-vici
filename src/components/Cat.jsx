function Cat({ cat, isShown }) {

	return (

		<section id="cat">

			{(isShown) &&

				<>

					<header>
						{cat.name}
					</header>

					<section id="info">

						<span>{cat.weight}</span>

						<span>{cat.origin}</span>

						<span>{cat.life_span}</span>

					</section>

					<div>

						<img
							src={cat.url}
							alt="This is a cat."
						/>

					</div>

				</>

			}



		</section>

	);

} // Cat()

//============================================================================

export { Cat };