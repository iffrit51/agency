import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import 'flag-icons/css/flag-icons.min.css';
import { Button } from '@mui/material';

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
  }
];

const PlayerCard = ({ player }) => {
  return (
    <div className="card" style={{ width: '20%',marginTop: '100px',marginBottom: '100px' }}>
      <div className="card-inner">
        {/* Face avant */}
        <div className="card-front">
          <img
            src={player.imageFront}
            alt={`${player.firstName} ${player.lastName}`}
            className="w-full object-cover"
            style={{ maxHeight: '300px' }}
          />
          <div className="player-info text-center mt-2">
            <h3 className="font-bold">{player.firstName} {player.lastName}</h3>
            <p>{player.position}</p>
          </div>
        </div>
        {/* Face arrière */}
        <div className="card-back bg-gray-900 text-white flex flex-col items-center justify-center p-4">
          <i className={`fi fi-${player.countryCode} text-2xl mb-2`}></i>
          <h3 className="text-lg font-bold">Stats</h3>
          <p>Âge : {player.age}</p>
          <p>Poste : {player.position}</p>
          <Button
            variant="contained"
            color="primary"
            style={{ 
              marginTop: '10px',
              background: 'linear-gradient(to right, #ff512f, #dd2476)',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: 'bold',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.2s ease-in-out'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-wrap justify-center gap-4 p-10" style={{ width: '80%', margin: '0 auto' }}>
        {playersData.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Players;