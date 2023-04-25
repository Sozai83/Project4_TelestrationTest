// index.html
import { useState, useEffect } from 'react';
import Head from 'next/head'
import Game from '../game'

export default  function HomePage() {
  const [game, setGame] = useState('');
  useEffect(()=>{
    const tempGame = new Game({
      "id": "game",
      "width": window.innerWidth,
      "height": window.innerHeight
    });
    tempGame.createGame();
  }, []);

  

  return (
    <>
      <Head>
        <title>Telestration Test</title>
        <script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script>
        <script src="https://s3.amazonaws.com/stitch-sdks/js/bundles/4.6.0/stitch.js"></script>
        <script src="./game.js"></script>
      </Head>
      <div id="game"></div>
    </>

  );
}