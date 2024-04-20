import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Landing from './Components/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Trending from './Components/Trending';
import Alltrending from './Components/Prodctscomponent/Alltrending';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}/> 
        <Route path='/trending' element={<Alltrending/>}/> 


      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
