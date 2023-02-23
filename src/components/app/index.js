import './style.scss';
import 'semantic-ui-css/semantic.min.css';


import Home from './Home';
import ProfilPage from './ProfilPage';
import CreateActivity from './CreateActivity';
import DetailledActivity from './DetailledActivity';

function App() {
  return (
    <div className="App">
      <Home />
      <ProfilPage />
      <CreateActivity />
      <DetailledActivity />

    </div>
  );
}

export default App;
