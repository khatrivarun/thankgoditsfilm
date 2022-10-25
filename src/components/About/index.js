import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import './index.scss'
import Netflix from '../../assets/images/netflix.png'
import Amazon from '../../assets/images/amazon.webp'
import Disney from '../../assets/images/disney.png'
import tgif from '../../assets/images/tgif.png'
import tgifFull from '../../assets/images/tgifFull.png'
import quantiphi from '../../assets/images/quantiphi.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't']}
            idx={15}
          />
        </h1>
        <p>
          We are a team of 5 budding developers who got the idea to create this
          web app during Quantiphi, Inc's mock project.
        </p>
        <p>
          We realised that OTT platforms are a huge source of entertainment and
          the primary choice of video content streaming right now. We decided
          that with this project, we wanted to help the OTT platforms decide
          which type of movies would their audiences like in terms of rating
          predictions.
        </p>
        <p>
          This project also aims to help the movie producers/directors to
          realise on which platform will their movie be most viewed on and
          accordingly handle the financial transactions of the movie rights
          purchase.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cube-spinner">
          <div className="face1">
            <img src={Netflix} alt="Netflix" height={30} />
          </div>
          <div className="face2">
            <img src={tgifFull} alt="tgifFull" height={200} />
          </div>
          <div className="face3">
            <img src={Disney} alt="Disney" height={50} />
          </div>
          <div className="face4">
            <img src={Amazon} alt="Amazon" height={40} />
          </div>
          <div className="face5">
            <img src={tgif} alt="tgif" height={250} />
          </div>
          <div className="face6">
            <img src={quantiphi} alt="quantiphi" height={250} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
