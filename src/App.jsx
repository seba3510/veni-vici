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
    "https://api.thecatapi.com/v1/images/search";


  //====================================================================

  async function fetchImage() {

    try {

      const response =
        await fetch(URL, {
          headers: {
            "x-api-key": API_KEY,
          },
        });

      const data =
        await response.json();

      console.log(data);

    } // try

    catch (error) {

      console.error("Error:", error);


    } // catch

  } // fetchImage()

  //====================================================================

  return (
    <>
      <Card
        handleClick={fetchImage}
      />
      <BanList />
    </>
  );


} // App()


//========================================================================

export { App };
