
import { Button } from "./Button.jsx";

//============================================================================

function Cat(
	{
		cat,
		isShown,
		banAttribute
	}) {

	return (

		<section id="cat">

			{(isShown) &&

				<>

					<header>
						{cat.name}
					</header>

					<section id="info">

						<Button
							buttonID="weight"
							catAttribute={cat.weight}
							handleClick={banAttribute}
						/>

						<Button
							buttonID="origin"
							catAttribute={cat.origin}
							handleClick={banAttribute}
						/>

						<Button
							buttonID="life-span"
							catAttribute={cat.life_span}
							handleClick={banAttribute}
						/>

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