import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Landing from './Components/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Trending from './Components/Trending';
import Alltrending from './Components/Prodctscomponent/Alltrending';
import { ThemeProvider, createTheme } from '@mui/material';
import Signup from './authentications/Signup';
import Login from './authentications/Login';
import Allpopular from './Components/Prodctscomponent/Allpopular';
const queryClient = new QueryClient();
const theme = createTheme();
function App() {
  return (
    <ThemeProvider  theme={theme}>

   
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}/> 
        <Route path='/trending' element={<Alltrending/>}/> 
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/allpopular' element={<Allpopular/>}/> 



      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </ThemeProvider>
 
  );
}

export default App;
