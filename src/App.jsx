import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SerieComponent from './components/SerieComponent';
import Nav from './components/NavComponent';
import Footer from './components/FooterComponent';

function App() {
  const series = [
    {
      cod: 1,
      nom: 'Friends',
      cat: 'Comedy',
      img: 'https://lafrikileria.com/blog/wp-content/uploads/2022/09/serie-friends-813x506.jpg',
    },
    {
      cod: 2,
      nom: 'Law & Order',
      cat: 'Drama',
      img: 'https://as1.ftcdn.net/v2/jpg/09/45/29/42/1000_F_945294293_FgAFe5YJgSjmHobuKCXft7gNPmFiUQkR.jpg',
    },
    {
      cod: 3,
      nom: 'The Bing Bang Theory',
      cat: 'Comedy',
      img: 'https://media.revistagq.com/photos/5cee4ed9d1dca845dac0aa34/16:9/w_960,c_limit/the-big-bang-theory.jpg',
    },
    {
      cod: 4,
      nom: 'Strangers Things',
      cat: 'Terror',
      img: 'https://es.web.img2.acsta.net/c_640_360/img/b9/b6/b9b6ebc49695263602f8948a9ec5501d.png',
    },
    {
      cod: 5,
      nom: 'Dr. House',
      cat: 'Drama',
      img: 'https://images.chicmagazine.com.mx/HELRHIOtjLXmeK8x6Iho7r7ZSF0=/958x596/uploads/media/2023/06/08/hugh-laurie-gano-dr-house.jpg',
    },
    {
      cod: 6,
      nom: 'The X-File',
      cat: 'Drama',
      img: 'https://i0.wp.com/thenerdsfamily.com/wp-content/uploads/2020/06/8ee0d5d2-d715-49cb-ac9d-e81cdf18278b.jpg',
    },
  ];

  return (
    <>
      <Nav />
      <div className="container mt-3">
        <h1 className="title">Series</h1>
        <div className="series-grid">
          {series.map((serie) => (
            <div key={serie.cod} className="series-card">
              <SerieComponent
                codigo={serie.cod}
                nombre={serie.nom}
                categoria={serie.cat}
                imagen={serie.img}
              />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
