import react from 'react';
import { useDispatch } from 'react-redux'

import NavBar from '../components/NavBar'


function App(props) {
  const dispatch = useDispatch()
  return (
    <div >
      <h2> User Auth </h2>

      <NavBar></NavBar>
      
    </div>
  );
}

export default App;
