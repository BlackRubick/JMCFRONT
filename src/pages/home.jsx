import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import homeimg from '../assets/images/home.jpg';
import logoxD from '../assets/images/logoxD.png';

const Home = () => {
  useEffect(() => {
    // Bloquear el desplazamiento vertical
    document.body.style.overflow = 'hidden';

    // Restaurar el desplazamiento vertical al desmontar el componente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/login');
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${homeimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="text-center mt-[90px] h-screen">
        <img
          src={logoxD}
          alt="Logo"
          className="mx-auto my-2 w-72"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-28 rounded-full md:w-64 lg:w-72 xl:w-80 w-full md:px-52 mt-3 shadow-button" onClick={handleNavigate}>
          Empezar
        </button>
      </div>
    </div>
  );
};

export default Home;
