import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import 'flag-icons/css/flag-icons.min.css';
import { Button } from '@mui/material';
import './Player.css'; // Si tu as des styles spécifiques

const playersData = [
  {
    id: 1,
    firstName: 'Niko',
    lastName: 'Suoraniemi',
    age: 40,
    position: 'Défenseur',
    imageFront: '/images/nikoSuoraniemiJpg.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/1751/niko-suoraniemi',
    countryCode: 'fi' // Code du drapeau finlandais
  },
  {
    id: 2,
    firstName: 'Wehebe',
    lastName: 'Darge',
    age: 28,
    position: 'Ailier',
    imageFront: '/images/wehebeDargeJpg.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/67936/wehebe-darge',
    countryCode: 'au' // Code du drapeau australien
  },
  {
    id: 3,
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    position: 'Gardien',
    imageFront: '/images/wehebeDargeJpg.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/00000/john-doe',
    countryCode: 'us' // Code du drapeau américain
  },
  {
    id: 4,
    firstName: 'Alex',
    lastName: 'Smith',
    age: 27,
    position: 'Attaquant',
    imageFront: '/images/alexSmith.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/11111/alex-smith',
    countryCode: 'ca' // Code du drapeau canadien
  },
  {
    id: 5,
    firstName: 'Tyler',
    lastName: 'Kubara',
    age: 27,
    position: 'Attaquant',
    imageFront: '/images/alexSmith.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/11111/alex-smith',
    countryCode: 'ca' // Code du drapeau canadien
  },
  {
    id: 6,
    firstName: 'Hector',
    lastName: 'Majul',
    age: 27,
    position: 'Attaquant',
    imageFront: '/images/alexSmith.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/11111/alex-smith',
    countryCode: 'ca' // Code du drapeau canadien
  },
  {
    id: 7,
    firstName: 'Ethan',
    lastName: 'Hawes',
    age: 27,
    position: 'Attaquant',
    imageFront: '/images/alexSmith.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/11111/alex-smith',
    countryCode: 'ca' // Code du drapeau canadien
  },
  {
    id: 8,
    firstName: 'Just',
    lastName: 'Castor',
    age: 27,
    position: 'Attaquant',
    imageFront: '/images/alexSmith.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/11111/alex-smith',
    countryCode: 'ca' // Code du drapeau canadien
  }
];

const PlayerCard = ({ player }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={player.imageFront} alt={`${player.firstName} ${player.lastName}`} className="card-image" />
          <div className="player-info">
            <h3>{player.firstName} {player.lastName}</h3>
            <p>{player.position}</p>
          </div>
        </div>
        <div className="card-back">
          <i className={`fi fi-${player.countryCode}`}></i>
          <h3>Stats</h3>
          <p>Âge : {player.age}</p>
          <p>Poste : {player.position}</p>
          <Button
            variant="contained"
            color="primary"
            className="info-button"
            onClick={() => window.open(player.eliteProspectsLink, '_blank')}
          >
            + Info
          </Button>
        </div>
      </div>
    </div>
  );
};

const Players = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="players-grid">
        {playersData.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Players;