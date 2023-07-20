import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import navxD from '../assets/images/nav.png';
import casitaxD from '../assets/images/casa.png';
import meunuxD from '../assets/images/barra.png';
import notixD from '../assets/images/notixD.png';
import perfilxD from '../assets/images/usuario.png';
import casa2 from '../assets/images/stay.png';
import histo from '../assets/images/expediente.png';
import tempexD from '../assets/images/temperatura.png';
import movixD from '../assets/images/movi.png';
import gas from '../assets/images/gas.png';
import luminocidad from '../assets/images/idea.png';
const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#1A1D85';

    return () => {
      // Restaurar el color de fondo original al desmontar el componente
      document.body.style.backgroundColor = '';
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="w-[400px] md:w-96 lg:w-120 h-screen flex justify-center relative">
        <div className="relative">
        <img src={navxD} alt="Imagen" style={{ marginTop: '-70px' }} />
          <div
            className="absolute top-[50px] left-[210px] transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '189px',
              height: '34px',
              flexShrink: 0,
              color: '#0D0D0D',
              textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              fontFamily: 'Eras Bold ITC',
              fontSize: '30px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
            }}
          >
            JMC System
          </div>
          <img
            src={casitaxD}
            alt="Logo"
            className="absolute top-[90px] right-[330px]"
            style={{
              width: '39px',
              height: '36px',
              flexShrink: 0,
            }}
          />
          
          <img
            src={notixD}
            alt="Imagen Derecha"
            className="absolute top-[29px] right-[30px]"
            style={{
              width: '50px',
              height: '50px',
              flexShrink: 0,
            }}
          />
          <div
            className="absolute top-[100px] right-[180px]"
            style={{
              color: '#0D0D0D',
              fontFamily: 'Eras Bold ITC',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
            }}
          >
            Cesar Gomez Aguilera
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '50px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '440px',
              height: '99px',
              flexShrink: 0,
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <button onClick={() => navigate('/home')}>
              <img
                src={casa2}
                alt="Imagen 1"
                style={{
                  width: '50px',
                  height: '50px',
                  flexShrink: 0,
                  marginLeft: '40px',
                }}
              />
              <div>ㅤㅤMy Home</div>
            </button>
 <button onClick={() => navigate('/historial')}>
  <img
    src={histo}
    alt="Imagen 2"
    style={{
      width: '50px',
      height: '50px',
      flexShrink: 0,
      marginLeft: '15px',
    }}
  />
  <div>ㅤHistorial</div>
</button>


            <button               onClick={() => navigate('/perfil')}
>
              <img
                src={perfilxD}
                alt="Imagen 3"
                style={{
                  width: '50px',
                  height: '50px',
                  flexShrink: 0,
                  marginRight: '40px',
                }}
              />
              <div style={{ marginRight: '40px' }}>Perfil</div>
            </button>
          </div>
          <div
            style={{
              color: 'white',
              fontFamily: 'Nunito',
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: 800,
              lineHeight: 'normal',
              textDecorationLine: 'underline',
              textTransform: 'capitalize',
              textAlign: 'center',
              bottom: '10px',
              right: '10px',
              width: '100%',
            }}
          >
            Sensores del Hogar
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '20px',
            }}
          >
            <button
              style={{
                width: '167px',
                height: '109px',
                flexShrink: 0,
                backgroundColor: 'white',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => navigate('/temperatura')}
            >
              <img
                src={tempexD}
                alt="Imagen 1"
                style={{
                  width: '50px',
                  height: '50px',
                }}
              />
              <div>
                Temperatura y
                <br />
                ㅤhumedad
              </div>
            </button>
            <button
              style={{
                width: '167px',
                height: '109px',
                flexShrink: 0,
                backgroundColor: 'white',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => navigate('/movimiento')}
            >
              <img
                src={movixD}
                alt="Imagen 2"
                style={{
                  width: '50px',
                  height: '50px',
                }}
              />
              <div>Movimiento</div>
            </button>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '20px',
            }}
          >
            <button
              style={{
                width: '167px',
                height: '109px',
                flexShrink: 0,
                backgroundColor: 'white',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={gas}
                alt="Imagen 3"
                style={{
                  width: '50px',
                  height: '50px',
                }}
                onClick={() => navigate('/gas')}
              />
              <div>Deteccion de gas</div>
            </button>
           


            <button
              style={{
                width: '167px',
                height: '109px',
                flexShrink: 0,
                backgroundColor: 'white',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={luminocidad}
                alt="Imagen 3"
                style={{
                  width: '50px',
                  height: '50px',
                }}
                onClick={() => navigate('/iluminacion')}
              />
              <div>Luminocidad </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
