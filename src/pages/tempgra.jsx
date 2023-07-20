import React, { useEffect, useState } from 'react';
import navxD from '../assets/images/nav.png';
import casitaxD from '../assets/images/casa.png';
import meunuxD from '../assets/images/barra.png';
import notixD from '../assets/images/notixD.png';
import perfilxD from '../assets/images/usuario.png';
import casa2 from '../assets/images/stay.png';
import tempexD from '../assets/images/temperatura.png';
import historialxD from '../assets/images/expediente.png';
import { useNavigate } from 'react-router-dom';

const Tempgra = () => {
  const [Movement, setMovement] = useState(null);
  const [base64Data, setBase64Data] = useState(null);
  const userId = 123;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZXhwIjoxNjg5ODU3ODE5fQ.wR3BPk6VRAwcmin6Cs71hWEVhc2GG-mfJkF1DbKN_e0';

// ... resto de tu código

useEffect(() => {
  document.body.style.backgroundColor = '#1A1D85';

  fetch('http://192.168.0.100:8001/sensor-list/123/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var longitud = data.data.length - 1;
      // Actualizar los estados de temperature y humidity con los datos recibidos del servidor
      const base64Content = data.respuestas_temperature[0].content;

      // Limpiamos las comillas del contenido Base64
      setBase64Data(base64Content.replace(/^"(.*)"$/, '$1'));
    })
    .catch((error) => {
      // Aquí manejas cualquier error ocurrido en la solicitud
      console.error('Error:', error);
    });

  return () => {
    // Restaurar el color de fondo original al desmontar el componente
    document.body.style.backgroundColor = '';
  };
}, []);

// ... resto de tu código


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
            <button onClick={() => navigate('/perfil')}>
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
              src={tempexD}
              alt="Imagen 1"
              style={{
                width: '50px',
                height: '50px',
                flexShrink: 0,
                marginLeft: '50px',
              }}
            />
            <div style={{ textAlign: 'center', fontWeight: 600 }}>ㅤㅤTemperatura</div>
          </div>

          {/* Div de color gris */}
          <div
            style={{
              width: '390px',
              height: '353px',
              backgroundColor: 'gray',
              marginTop: '90px',
            }}
          >
            <div>
              {base64Data ? (
                // Si tienes el contenido Base64, muestra la imagen
                <img src={base64Data} alt="Imagen en Base64" />
              ) : (
                // Si no tienes el contenido Base64, muestra un mensaje de carga o cualquier otra cosa
                <p>Cargando imagen...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tempgra;
