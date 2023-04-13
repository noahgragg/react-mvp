import React from 'react';
import './App.css';
import Equipment from './Equipment.jsx'
import Stats from'./Stats.jsx'
import Buttons from './Buttons.jsx'
// import WowHead from './wowhead';
import { Helmet } from 'react-helmet';
//fetch('http://localhost:3000/api/query/1?endpoint=/sc2/profile/1/2/242838',{method: "GET", mode: 'cors'})
//.then(resp => console.log(resp))
// const whTooltips = {"colorLinks": true, "iconizeLinks": true, "iconSize": true, "renameLinks": true, "dropchance": true}}}
const App = () => {
  return (
    <div className="App">
      <Helmet>
      <title>Tester</title>
      <script src="https://wow.zamimg.com/js/tooltips.js"></script>
      <script>{`const whTooltips = {"colorLinks": true, "iconizeLinks": true, "iconSize": true, "renameLinks": true, "dropchance": true}`}</script>
      
      </Helmet>
      
      <Equipment />
      <Stats />
      <Buttons />
    </div>
  );
}

export default App;
