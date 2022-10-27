import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Disney from '../../assets/images/disney.png'
import Amazon from '../../assets/images/amazon.webp'
import Netflix from '../../assets/images/netflix.png'
import Gif from '../../assets/images/homepagegif.gif'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['t', '.', 'g', '.', 'i', '.', 'f']
  const jobArray = [
    't',
    'h',
    'a',
    'n',
    'k',
    ' ',
    'G',
    'o',
    'd',
    ' ',
    'i',
    't',
    's',
    ' ',
    'F',
    'i',
    'l',
    'm',
    's',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/* <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span> */}
            {/* <span
              className={`${letterClass} _14`}
              style={{ 'padding-right': '14px' }}
            >
              'm
            </span> */}

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Find the rating of your unreleased movie here.</h2>
          <Link to="/analyze" className="flat-button">
            GET RATING
          </Link>
        </div>
        <div className="gif-container">
          <img src={Gif} alt="homepagegif" />
        </div>
        <div className="ott-info">
          <img src={Netflix} alt="Netflix" width={100} />
          <img src={Amazon} alt="Amazon" width={100} />
          <img src={Disney} alt="Disney" width={100} />
        </div>
      </div>
    </>
  )
}

export default Home
