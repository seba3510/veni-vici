import { Cat } from "./Cat.jsx";

//========================================================

function Card({ handleClick, image, isShown }) {
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
				/>

				<button type="button" id="discover-btn" onClick={handleClick}>
					🔀 Discover!
				</button>
			</header>

		</section>
	);

} // Card()

//=====================================================================

export { Card };
