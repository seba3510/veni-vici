import { Button } from "./Button.jsx";

//================================================================

function BanList({ attributes }) {

	return (

		<section id="ban-list">

			<h1>Ban List</h1>

			<p>Select an attribute in your listing to ban it.</p>

			<section id="attributes">

				{

					attributes.map((attribute, index) => (

						<button
							key={index}
						>
							{attribute}
						</button>

					))}

			</section>

		</section>

	);

} // BanList()

//================================================================

export { BanList };