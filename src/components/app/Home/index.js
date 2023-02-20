import './style.scss';
import Header from '../../app/Header';
import Footer from '../../app/Footer';
import Filtered from '../../app/FilteredActivities';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Filtered />
      <Footer />

    </div>
  );
}

export default Home;
