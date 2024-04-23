import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import google from '../authentications/google.png';
import Email from '../authentications/mail.png';
import './login.css'

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleEmailOrPhoneChange = (event) => {
    const { value } = event.target;
    setEmailOrPhone(value);

    // Frontend verification: Check if email contains '@gmail' or if it's a valid phone number
    if (!value.includes('@gmail') && !isValidPhoneNumber(value)) {
      setEmailError('Please enter a valid email or phone number');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isValidPhoneNumber = (input) => {
    return /^\d{10}$/.test(input);
  };

  const login = async (emailOrPhone, password) => {
    try {
      const formData = new FormData();
      formData.append('emailormobile', emailOrPhone);
      formData.append('password', password);

      const response = await fetch('https://portal.umall.in/api/customer/login', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        if (data.sts === '01') { // Check for successful login status
          // Navigate to the landing page
          navigate('/');
        } else {
          // Display alert for failed login
          alert('Login credentials failed');
        }
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(emailOrPhone, password);
  };

  return (
    <div className='signup'>
      <div className='signup-image'></div>

      <div className='signup-container'>
        <div className="headsignup"><h1 className='fasco'>FASCO</h1></div>
        <div className="signtitle">Sign In To Fasco</div>
        <div className="google-email">
          <div className="google"><img src={google} alt="" /> Sign in with Google</div>
          <div className="email"><img src={Email} alt="" />Sign in with Email</div>
        </div>

        <div className="divOR">OR</div>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center" className='inputss'>
            <Grid item xs={12} lg={12}>
              <div className="input-container">
                <input
                  type='text'
                  placeholder='Email or Phone'
                  className={`input-fields ${emailError ? 'error' : ''}`}
                  name='emailOrPhone'
                  value={emailOrPhone}
                  onChange={handleEmailOrPhoneChange}
                />
                {emailError && <p className="error-message">{emailError}</p>}
              </div>
            </Grid>
            <Grid item xs={12} lg={12}>
              <input
                type='password'
                placeholder='Password'
                className='input-fields'
                name='password'
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
          </Grid>

          <div className="button-container">
            <div className="but-s">
              <button type="submit" className='button-signin'>
                Sign in
              </button>
            </div>
            <div className="but-r">
              <button onClick={()=>navigate('/signup')} className='button-register'>
                Register
              </button>
            </div>
          </div>

          <div className='fgdiv'>
            <p className='fg'>Forgot Password?</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
