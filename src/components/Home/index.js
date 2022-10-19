import './index.css';
import Netflix from '../../assets/images/netflix-logo.svg';
import Amazon from '../../assets/images/amazon.webp';
import Disney from '../../assets/images/disney.png';
import Television from '../../assets/images/tv.png';

const Home = () => {
  return (
    <div className='container'>
      <img
        className='television-img'
        src={Television}
        alt='Television'
        width={300}
      />
      <div className='image-fader'>
        <img src={Netflix} alt='Netflix' width={100} />
        <img src={Amazon} alt='Amazon' width={280} />
        <img src={Disney} alt='Disney' width={200} />
      </div>
    </div>
  );
};

export default Home;

