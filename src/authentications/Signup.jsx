import React, { useState } from 'react';
import './signup.css';
import { Grid } from '@mui/material';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const checkAvailability = async (url, key, value) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ [key]: value }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to check ${key} availability`);
      }

      const data = await response.json();
      console.log(`${key} check response:`, data);
      return data;
    } catch (error) {
      console.error(`Error checking ${key} availability:`, error);
      throw error;
    }
  };

  const checkEmailAvailability = async (email) => {
    return checkAvailability('https://portal.umall.in/api/check/customer/email', 'email', email);
  };

  const checkPhoneAvailability = async (phone) => {
    return checkAvailability('https://portal.umall.in/api/check/customer/number', 'phone', phone);
  };

  const registerUser = async (formData) => {
    try {
      const response = await fetch('https://portal.umall.in/api/customer/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const data = await response.json();
      console.log('User registered successfully:', data);
      navigate('/');
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  };

  const { mutate: register, isLoading: isRegistering, isError: registrationError } = useMutation(registerUser);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const emailResponse = await checkEmailAvailability(formData.email);
      const phoneResponse = await checkPhoneAvailability(formData.phone);

      if (emailResponse.sts === '01') {
        console.log('Email already exists');
        return;
      }

      if (phoneResponse.sts === '01') {
        console.log('Phone number already exists');
        return;
      }

      await register(formData);
      
    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMsg(error.message);
    }
  };

  return (
    <div className='signup'>
      <div className='signup-image'></div>

      <div className='signup-container'>
        <div className="headsignup"><h1 className='fasco'>FASCO</h1></div>
        <div className="forgetpass">Signup</div>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center" className='inputs'>
            <Grid item xs={12} lg={6}>
              <input
                type='text'
                placeholder='Name'
                className='input-field'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <input
                type='email'
                placeholder='Email'
                className='input-field'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <input
                type='password'
                placeholder='Password'
                className='input-field'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <input
                type='text'
                placeholder='Phone'
                className='input-field'
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <div className="but">
            <button type="submit" className='button' disabled={isRegistering}>
              {isRegistering ? 'Processing...' : 'Signup'}
            </button>
          </div>
          {registrationError && <p>Error: Failed to register user</p>}
          {errorMsg && <p className='error-message'>{errorMsg}</p>}
        </form>

        <div>
          <p className='alreadyacc'>already have an account? <span><Link to={'/login'}  className='spanlog'>Login</Link></span></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
