function Card() {

	function fetchImage() {

		const button =
			document.querySelector
				("#discover-btn");

		button.addEventListener("click", () => {

			alert("You have clicked me!");

		}); // addEventListener()


	} // fetchImage()

	//====================================================================

	return (

		<section id="card">
			<h1>Veni Vici!</h1>

			<p id="description">Discover some cats from your wildest dreams!</p>

			<p id="emojis">
				😺😹😻😼😽🙀😿😾
			</p>

			<button
				type="button"
				id="discover-btn"
				onClick={fetchImage}
			>
				🔀
				Discover!
			</button>

		</section>

	);


} // Card()

//=====================================================================

export { Card };