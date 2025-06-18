/* eslint-disable no-unexpected-multiline */
import { useState } from 'react';

//========================================================================

import { Card } from './components/Card.jsx';

//========================================================================

import { BanList } from './components/BanList.jsx';

//========================================================================

import "./styles/style.css";

//========================================================================

function App() {

	const API_KEY =
		"live_n7R5WIIdObsEs2l67kdw2PF25w1eseFpBXvSOKch7fXgl3oJfpv34VqwpF7A5ax1";

	//====================================================================

	const URL =
		"https://api.thecatapi.com/v1/images/search?limit=50";

	//====================================================================

	const [
		image,
		setImage
	] =
		useState({
			url: "",
			breed: [],
			origin: "",
			life_span: "",
			name: "",
			weight: []
		});

	//====================================================================

	const [
		isShown,
		setIsShown
	] =
		useState(false);

	//====================================================================

	const [
		bannedAttributes,
		setBannedAttributes
	] =
		useState([]);

	//====================================================================


	const requestHeaders =
	{
		headers: {
			"x-api-key": API_KEY,
			"Content-Type": "application/json",
		},
	};

	//====================================================================

	function getRandomIndex(min, max) {

		const minCeiled =
			Math.ceil(min);

		const maxFloored =
			Math.floor(max);

		const randomIndex =
			Math.floor(
				Math.random() *
				(maxFloored - minCeiled + 1)
				+ minCeiled
			);

		return randomIndex;

	} // getRandomIndex()

	//====================================================================

	function filterData(data) {

		return data.filter((cat) => {

			const breed =
				cat.breeds?.[0];

			const isDataValid =
				(cat.url) &&
				(breed) &&
				(breed.origin) &&
				(breed.life_span) &&
				(breed.name) &&
				(breed.weight?.metric);

			if (!isDataValid) {

				return false;

			} // if

			const areAttributeBanned =
				checkBannedAttributes
					(breed);

			return areAttributeBanned;

		}); // filter()

	} // filterData()

	//====================================================================

	function checkBannedAttributes(breed) {

		const name =
			breed.name;

		const isNameIncluded =
			bannedAttributes.includes
				(name);

		const origin =
			breed.origin;

		const isOriginIncluded =
			bannedAttributes.includes
				(origin);

		const lifeSpan =
			breed.life_span;

		const isLifeSpanIncluded =
			bannedAttributes.includes
				(lifeSpan);

		const weight =
			breed.weight.metric;

		const isWeightIncluded =
			bannedAttributes.includes
				(weight);

		const areAttributeBanned =
			(isNameIncluded) ||
			(isOriginIncluded) ||
			(isLifeSpanIncluded) ||
			(isWeightIncluded);

		return (!areAttributeBanned);

	} // checkBannedAttributes()

	//====================================================================

	function banAttribute(attribute) {

		setBannedAttributes(
			(prev) =>
				[...prev,
					attribute
				]
		);

	} // banAttribute()

	//====================================================================

	async function fetchImages() {

		try {

			const response =
				await fetch(
					URL,
					requestHeaders
				);

			const data =
				await response.json();

			const cats =
				filterData
					(data);

			const n =
				cats.length - 1;

			const randomIndex =
				getRandomIndex
					(0, n);

			const cat =
				cats[randomIndex];

			const breed =
				cat.breeds[0];

			setImage({
				url: cat.url,
				breed: cat.breeds,
				origin: breed.origin,
				life_span: breed.life_span,
				name: breed.name,
				weight: breed.weight.metric,
			});

			setIsShown(true);

		} // try

		catch (error) {

			alert(error);

		} // catch

	} // fetchImages()

	//====================================================================

	return (
		<>

			<Card
				fetchImage={fetchImages}
				image={image}
				isShown={isShown}
				banAttribute={banAttribute}
			/>

			<BanList
				attributes={bannedAttributes}
			/>

		</>
	);

} // App()

//========================================================================

export { App };