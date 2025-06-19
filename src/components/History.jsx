function History({ cats }) {

	return (

		<section id="history-container">

			<h1>Who have we seen so far?</h1>

			<section id="history">

				{

					cats.map((cat, index) => (

						<section key={index}>

							<img
								src={cat.url}
								alt="This is a cat"
							/>

							<p>{cat.description}</p>

						</section>

					)) // map()

				}

			</section>


		</section>

	);

} // History()

//========================================================================

export { History };