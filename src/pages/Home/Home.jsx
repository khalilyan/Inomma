import React from 'react'
import './Home.css'
import './Responsive.css'
import sunIcom from '../../assets/svg-sun.svg'
import arrowDown from '../../assets/arrow-down.svg'
import aboutImg from '../../assets/aboutImg.png'
import { data } from './data'
import Carousel from '../../components/Carousel/Carousel'
import { carouselData } from '../../components/Carousel/data'
import { motion } from 'framer-motion'
import HeaderRender from '../../components/symbolRender/HeaderRender/HeaderRender'
import LargeButton from '../../components/LargeButton/LargeButton'
import UnfocusAnimation from '../../components/UnFocusAnimation/UnfocusAnimation'
import { useMediaQuery } from 'react-responsive'


export default function Home() {
  const isMobile = useMediaQuery({ minWidth: 960.95 })
  return (
    <main className="HomeContainer">

        <div className="homePoster first-section">
            {/* <div className="fseectionWrapper"> */}
            <UnfocusAnimation/>
            <div className='row-1'>
                <HeaderRender text={data.firstSection[0]} />
            </div>
            <div className='row-2' >
                <HeaderRender text={data.firstSection[1]} />
            </div>
            <div className="scrollDownContain">
                  <img src={arrowDown}/>
                  <img src={sunIcom}/>
            </div>
          {/* </div> */}
        </div>

        <div className="whatWeDo second-section">
          {isMobile?<img src={aboutImg}/>:null}
          <div className="aboutTxtContainer">
          <div className='aboutHeader'>
            <HeaderRender position={50} text={data.secondSection[0]} />
          </div>
          {!isMobile?<img src={aboutImg}/>:null}
            <div className='aboutTxt'>
              {
                data.secondSection[1].split(' ').map((word,index)=>{
                  return <motion.div 
                            key={index} 
                            style={{display: 'inline-block', height: '0%'}}
                            initial={{height: isMobile?0:'auto',opacity: 0}}
                            whileInView={{height: 'auto',opacity: 1}}
                            transition={{duration: 0.9,delay: 0.03*index}}
                            viewport={{once: 1}}
                            >
                            <p 
                              style={{display: 'inline-block'}}>{word}&nbsp;</p>
                        </motion.div>
                })
              }
            </div>
          </div>
        </div>

        <div className="SectionOfCarousel third-section">
            
              <div className="carouselHeader">
                <HeaderRender position={50} text={data.thirdSection[0]} />
              </div>

              <Carousel content={carouselData}/>

        </div>

        <div className="fourth-section">
             <div className="projectsHeader">
                <HeaderRender text={data.fourthSection.header} />
              </div>

              <div className="project-list">
                {
                  data.fourthSection.images.map((item,index)=>{
                    return (
                      <motion.a 
                        key={index}
                        className="project-carousel-item"
                        initial={{y: 100,opacity: 0}}
                        whileInView={{y: 0,opacity: 1}}
                        transition={{duration: 1.2,delay: 0.05*index}}
                        viewport={{once: 1}}
                      >
                        <div className="sc-fotOHu gYkKGF">
                          <div>
                            <div index={index+1} className={"project project-"+(index+1)}>
                            <img src={item.src} alt={item.name} />
                            <p>{item.name}</p>
                            </div>
                          </div>
                        </div>
                      </motion.a>
                    )
                  })
                }
              </div>
                <LargeButton/>
 
        </div>
    </main>
  )
}
