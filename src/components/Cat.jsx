function Cat({ cat, isShown }) {

	return (

		<section id="cat">

			{(isShown) &&

				<>

					<header>
						{cat.name}
					</header>

					<section id="info">

						<button>{cat.weight}</button>

						<button>{cat.origin}</button>

						<button>{cat.life_span}</button>

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