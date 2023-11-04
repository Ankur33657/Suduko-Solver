import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Page from './component/Page';
function App() {
  return (
  <>
   <BrowserRouter>
   <Page/>
   </BrowserRouter>
  </>
  );
}

export default App;
