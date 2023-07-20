import React, { useEffect, useState } from 'react';
import loginxD from '../assets/images/login.png';
import logologin from '../assets/images/logologin.png';

const Login = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      password: password,
      email: email
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch('http://192.168.0.106:8000/login/', requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          window.location.href = '/home'; // Redirecciona manualmente
        } else {
          setError('Usuario o contraseña incorrectos');
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
      <div className="absolute top-0">
        <img src={loginxD} alt="Background" className="w-489 h-263 flex-shrink-0" />
      </div>
      <div className="relative z-10 mt-[-80px]">
        <form
          className="bg-white shadow-md rounded-lg px-9 py-6 w-369 h-547 overflow-y-auto"
          style={{ borderRadius: '20px' }}
        >
          <div className="flex justify-between">
            <div
              className="w-[250px]  h-8 flex-shrink-0 text-black text-center rounded-full"
              style={{
                color: 'black',
                fontFamily: 'Nunito',
                fontSize: '30px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Iniciar Sesión
            </div>
          </div>
          <div className="flex items-center mt-4">
            <img src={logologin} alt="Logo" className="w-30 h-20 flex-shrink-0 mr-6" />
            <div
              className="text-black font-nunito text-25 font-bold mt-5 ml-[-20px]"
              style={{
                color: '#000',
                fontFamily: 'Nunito',
                fontSize: '25px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal'
              }}
            >
              JMC SYSTEM
            </div>
          </div>
          <div className="mt-6">
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md"
              placeholder="Correo Electrónico"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div className="w-full h-px bg-gray-300 mt-1"></div>
          </div>
          <div className="mt-4">
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md"
              placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div className="w-full h-px bg-gray-300 mt-1"></div>
          </div>
          {error && <div className="mt-4 text-red-500">{error}</div>}
          <div className="flex justify-center mt-6">
            <button
              className="w-full max-w-xs h-12 flex-shrink-0 rounded-full text-white font-nunito text-16 font-semibold bg-[#1A1D85] shadow-md"
              style={{
                borderRadius: '40px',
                background: '#1A1D85',
                boxShadow: '4px 4px 6px 0px rgba(255, 255, 255, 0.80)'
              }}
              onClick={handleLogin}
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="mt-4 text-center">
            ¿No tienes cuenta?{' '}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => window.location.href = '/register'} // Redirecciona manualmente
            >
              Regístrate
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
