/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
import './style.scss';

import { Image } from 'semantic-ui-react';
import errorImage from '../../../assets/error-image.png';

function NotFound() {
  return (
    <div className="error__div">
      <h1 className="error__title">Oups ! Il semblerait  que vous vous soyez perdu(e) dans notre site</h1>
      <Image src={errorImage} />
    </div>
  );
}

export default NotFound;
