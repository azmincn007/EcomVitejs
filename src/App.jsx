import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Landing from './Components/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Trending from './Components/Trending';
import Alltrending from './Components/Prodctscomponent/Alltrending';
import { ThemeProvider, createTheme } from '@material-ui/core';
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


      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </ThemeProvider>
 
  );
}

export default App;
