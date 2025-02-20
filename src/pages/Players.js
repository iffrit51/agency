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
    birthDate: '1984-02-15',
    position: 'Entraîneur',
    imageFront: '/images/nikoSuoraniemiJpg.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/1751/niko-suoraniemi',
    countryCodes: ['fi', 'se'] // Code du drapeau finlandais
  },
  {
    id: 2,
    firstName: 'Wehebe',
    lastName: 'Darge',
    birthDate: '1991-06-10',
    position: 'Ailier',
    imageFront: '/images/wehebeDargeJpg.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/67936/wehebe-darge',
    countryCodes: ['au'] // Code du drapeau australien
  },
  {
    id: 3,
    firstName: 'Jordan',
    lastName: 'Steger',
    birthDate: '1990-09-25',
    position: 'Entraîneur',
    imageFront: '/images/JordanSteger.jpg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/159923/jordan-steger',
    countryCodes: ['us'] // Code du drapeau américain
  },
  {
    id: 4,
    firstName: 'Johan',
    lastName: 'Kämpe',
    birthDate: '1972-04-18',
    position: 'Entraîneur',
    imageFront: '/images/JohanKampe.jpeg',
    eliteProspectsLink: 'https://www.eliteprospects.com/staff/2835/johan-kampe',
    countryCodes: ['se'] // Code du drapeau suedois
  },
  {
    id: 5,
    firstName: 'Casey',
    lastName: 'Kubara',
    birthDate: '1996-04-06',
    position: 'Centre',
    imageFront: '/images/CaseyKubara.jpeg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/189983/casey-kubara',
    countryCodes: ['au', 'pl'] // Code du drapeau canadien
  },
  {
    id: 6,
    firstName: 'Hector',
    lastName: 'Majul',
    birthDate: '1994-05-07',
    position: 'Attaquant',
    imageFront: '/images/HectorMajul.jpeg',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/154463/hector-majul',
    countryCodes: ['mx'] // Code du drapeau canadien
  },
  {
    id: 7,
    firstName: 'Ethan',
    lastName: 'Hawes',
    birthDate: '2002-03-24',
    position: 'Défenseur',
    imageFront: '/images/EthanHawes.png',
    eliteProspectsLink: 'https://www.eliteprospects.com/player/599777/ethan-hawes',
    countryCodes: ['au', 'us'] // Code du drapeau australien
  }
];

const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

const PlayerCard = ({ player }) => {
  return (
    <div className="card centered">
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
          <p>Âge : {calculateAge(player.birthDate)}</p>
          <p>Poste : {player.position}</p>
          <Button
            variant="contained"
            color="primary"
            className="info-button"
            onClick={() => window.open(player.eliteProspectsLink, '_blank')}
          >
            Stats
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