import logo from './logo.svg';
import './App.css';

import {toggle} from './actions'
import {useSelector,useDispatch} from 'react-redux'

function App() {

  const status = useSelector(state => state.toggle) 
  const dispatch = useDispatch()
  const text = status ? 'ON' : 'OFF'
  return (
    <div className="App">
      <button onClick={() => dispatch(toggle())}>{text}</button>
    </div>
  );
}

export default App;
