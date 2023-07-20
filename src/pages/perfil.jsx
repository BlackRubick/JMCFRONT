import React, { useEffect } from 'react';
import navxD from '../assets/images/nav.png';
import casitaxD from '../assets/images/casa.png';
import meunuxD from '../assets/images/barra.png';
import notixD from '../assets/images/notixD.png';
import perfilxD from '../assets/images/usuario.png';
import casa2 from '../assets/images/stay.png';
import perfil from '../assets/images/perfilxD2.png';
import historialxD from '../assets/images/expediente.png';
import { useNavigate } from 'react-router-dom';

const Gasgra = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = '#1A1D85';

    return () => {
      // Restaurar el color de fondo original al desmontar el componente
      document.body.style.backgroundColor = '';
    };
  }, []);

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
                src={historialxD}
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
            <button>
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
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '20px',
            }}
          ></div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '20px',
            }}
          ></div>
         <div
            style={{
              position: 'absolute',
              top: '200px',
              right: '70px',
              transform: 'translateY(-50%)',
              width: '270px',
              height: '60px',
              flexShrink: 0,
              backgroundColor: 'white',
              borderRadius: '30px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '1px',
            }}
          >
            <img
              src={perfil}
              alt="Imagen 1"
              style={{
                width: '50px',
                height: '50px',
                flexShrink: 0,
                marginLeft: '50px',
              }}
            />
            <div style={{ textAlign: 'center', fontWeight: 600 }}>ㅤㅤㅤPerfil</div>
          </div>




          <div
            style={{
              position: 'absolute',
              top: '300px',
              right: '50px',
              transform: 'translateY(-50%)',
              width: '300px',
              height: '60px',
              flexShrink: 0,
              backgroundColor: 'white',
              borderRadius: '30px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '1px',
            }}
          >
           
            <div style={{ textAlign: 'center', fontWeight: 600 }}>ㅤNombre : Cesar Gomez Aguilera </div>
          </div>







          <div
            style={{
              position: 'absolute',
              top: '400px',
              right: '50px',
              transform: 'translateY(-50%)',
              width: '300px',
              height: '60px',
              flexShrink: 0,
              backgroundColor: 'white',
              borderRadius: '30px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '1px',
            }}
          >
           
            <div style={{ textAlign: 'center', fontWeight: 600 }}>ㅤCorreo : cesar@hotmail.com</div>
          </div>



          <button
            style={{
              position: 'absolute',
              top: '600px',
              right: '70px',
              transform: 'translateY(-50%)',
              width: '270px',
              height: '60px',
              flexShrink: 0,
              backgroundColor: 'white',
              borderRadius: '30px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '1px',
            }}
          >
           
            <div style={{ textAlign: 'center', fontWeight: 600 }}>ㅤㅤㅤㅤㅤㅤCerrar Sesion </div>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Gasgra;
