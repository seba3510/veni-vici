function Cat({ cat }) {

	return (

		<section id="cat">

			<section id="info">

				<p>{cat.name}</p>

				<p>{cat.weight}</p>

				<p>{cat.origin}</p>

				<p>{cat.life_span}</p>

			</section>

			<div>

				<img
					src={cat.url}
					alt="This is a cat."
				/>

			</div>

		</section>

	);

} // Cat()

export { Cat };