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
    position: 'Entraîneur',
    imageFront: '/images/nikoSuoraniemiJpg.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/1751/niko-suoraniemi',
    countryCodes: ['fi','se'] // Code du drapeau finlandais
  },
  {
    id: 2,
    firstName: 'Wehebe',
    lastName: 'Darge',
    age: 33,
    position: 'Ailier',
    imageFront: '/images/wehebeDargeJpg.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/67936/wehebe-darge',
    countryCodes: ['au'] // Code du drapeau australien
  },
  {
    id: 3,
    firstName: 'Jordan',
    lastName: 'Steger',
    age: 34,
    position: 'Entraîneur',
    imageFront: '/images/JordanSteger.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/159923/jordan-steger',
    countryCodes: ['us'] // Code du drapeau américain
  },
  {
    id: 4,
    firstName: 'Johan',
    lastName: 'Kämpe',
    age: 52,
    position: 'Entraîneur',
    imageFront: '/images/JohanKampe.jpeg',
    eliteProspectsLink: 'https://www.eliteprospects.com/staff/2835/johan-kampe',
    countryCodes: ['se'] // Code du drapeau suedois
  },
  {
    id: 5,
    firstName: 'Casey',
    lastName: 'Kubara',
    age: 28,
    position: 'Centre',
    imageFront: '/images/CaseyKubara.jpeg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/189983/casey-kubara',
    countryCodes: ['au','pl'] // Code du drapeau canadien
  },
  {
    id: 6,
    firstName: 'Hector',
    lastName: 'Majul',
    age: 27,
    position: 'Attaquant',
    imageFront: '/images/HectorMajul.jpeg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/154463/hector-majul',
    countryCodes: ['mx'] // Code du drapeau canadien
  },
  {
    id: 7,
    firstName: 'Ethan',
    lastName: 'Hawes',
    age: 22,
    position: 'Défenseur',
    imageFront: '/images/EthanHawes.png',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/599777/ethan-hawes',
    countryCodes: ['au','us'] // Code du drapeau australien
  },
  {
    id: 8,
    firstName: 'Just',
    lastName: 'Castor',
    age: 27,
    position: 'Attaquant',
    imageFront: '/images/alexSmith.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/11111/alex-smith',
    countryCodes: ['ca'] // Code du drapeau canadien
  }
];

const PlayerCard = ({ player }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={player.imageFront} alt={`${player.firstName} ${player.lastName}`} className="card-image" />
          <div className="player-info centered">
            <h3>{player.firstName} {player.lastName}</h3>
            <p>{player.position}</p>
          </div>
        </div>
        <div className="card-back centered">
        <div className="flags">
            {player.countryCodes.map(code => (
              <i key={code} className={`fi fi-${code} flag-icon`}></i>
            ))}
          </div>
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