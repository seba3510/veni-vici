import { Cat } from "./Cat.jsx";

//========================================================

function Card(
	{
		fetchImage,
		image,
		isShown,
		banAttribute
	}) {

	//====================================================================

	return (
		<section id="card">
			<header>
				<h1>Veni Vici!</h1>

				<p id="description">
					Discover some cats from your wildest dreams!
				</p>

				<p id="emojis">😺😹😻😼😽🙀😿😾</p>

				<Cat
					cat={image}
					isShown={isShown}
					banAttribute={banAttribute}
				/>

				<button
					type="button"
					id="discover-btn"
					onClick={fetchImage}
				>
					🔀 Discover!
				</button>
			</header>

		</section>
	);

} // Card()

//=====================================================================

export { Card };
