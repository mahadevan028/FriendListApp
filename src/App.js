import './App.css';
import FriendsListPageComponent from './components/Friends_List_Page/Friends_List_Page_Component.jsx';
import Particles from 'react-particles-js';

const options = {
  particles: {
    number: {
      value: 50,
      density: {
        value_area: 250,
        enable: true
      }
    }
  }
}
function App() {
  return (
    <div className="App">
      <Particles className='particles'
          params={options} />
      <FriendsListPageComponent>

      </FriendsListPageComponent>
    </div>
  );
}

export default App;
