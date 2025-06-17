function Image({ image }) {


	return (

		<section id="image">
			<img
				src={image.path}
				alt="This is a cat."
			/>
		</section>

	);

} // Image()

export { Image };