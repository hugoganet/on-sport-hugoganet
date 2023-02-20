import './style.scss';
import 'semantic-ui-css/semantic.min.css';

import { Button } from 'semantic-ui-react';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
<Button className="ui button">Click Here</Button>
    </div>
  );
}

export default App;
