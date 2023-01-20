import * as React from "react"
import { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

import logo from '../images/old_logo.png';
import communitySVG from '../images/community.svg';
import com2 from '../images/com2.png';
import com3 from '../images/com3.png';

import '../global/global.scss';
import './index.scss';
import Centered from "../components/centered";
import Slide from "../components/slide";
import Wave from "../components/wave";
import Blob from "../components/blob";
import Page from "../global/page";

const LandingComponent = () => {

  const [rotated, setRotated] = useState(0);
  
  useEffect(() => {

    const onScroll = () => {

      setRotated(window.scrollY > 50 ? -20 : 0);

    };
    
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return (
    <Slide>
      <div className="lc" id="home">
        <div className="left">
          <div className="title"><Fade up>Green Keys Finance</Fade></div>
          <div className="subtitle"><Fade delay={400} up>- at UChicago -</Fade></div>
          <Fade delay={800} up><div className="buttonParent">
            <a href="https://forms.gle/tboYkc6ZU6akRxoY8" target="_blank">
              <Blob>
              <div className="button">Join!</div>
              </Blob>
            </a>
          </div></Fade> 
        </div>
        <div className="right">
          <Roll right>
            <div>
              <img src={logo} className="logo" style={{transform: `rotate(${rotated}deg)`}}></img>
            </div>
          </Roll>
        </div>
      </div>
    </Slide>
  )

};

const AfterMain = () => {

  return (
    <div className="am" style={{display: "flex", flexDirection: "column"}} id="mission">
      <Wave color="#00784A"/>
      <Slide style={{backgroundColor: "#00784A", paddingTop: "50px", paddingBottom: "50px"}}>
        <div className="title">OUR MISSION</div>
        <div className="clubDescription"><Fade>
        We aim to harness the power of Finance for positive social good and mental health. Through strategies of Financial Planning, Modeling and Banking, Green Keys @ UChicago will serve as a hotspot for Financial learning inside UChicago's intelligent student population. Students searching to meet people and join a community will find a home at Green Keys. <br />
        </Fade></div>
        <div className="threeBoxes">
          <Fade up><div className="box">
            <div className="icon"><img src={communitySVG}></img></div>
            <div className="heading">Financial Modelling & Planning</div>
            <div className="description">Green Keys is focused on educating members on financial literacy, through seminars, workshops and resources on budgeting, saving, investing and financial planning & modeling, to empower them to make informed financial decisions for their long-term well-being. </div>
          </div></Fade>
          <Fade delay={400} up><div className="box">
            <div className="icon"><img src={com2}></img></div>
            <div className="heading">Commercial Banking</div>
            <div className="description">Green Keys educates members on commercial banking, providing resources and guidance on financial products and services to help them navigate the banking system.</div>
          </div></Fade>
          <Fade delay={800} up><div className="box">
            <div className="icon"><img src={com3}></img></div>
            <div className="heading">Capital Markets</div>
            <div className="description">Green Keys educates members on the capital markets, providing resources and guidance on securities and financial instruments, as well as investment strategies and risk management.</div>
          </div></Fade>
        </div>
      </Slide>
      <Wave color="#00784A" end/>
    </div>
  )

}

const JoinSlide = () => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  let currentSemester = "Spring";
  if (currentMonth > 4) currentSemester = "Summer";
  if (currentMonth >= 7) currentSemester = "Fall";

  return (
    <Slide>
      <div className="js" id="join">
        {currentSemester != "Summer" && 
          <div className="option">
            <Fade right><a href="https://forms.gle/tboYkc6ZU6akRxoY8" target="_blank"><div className="link">Apply</div></a></Fade>
            <div className="header">INTERESTED IN JOINING?</div>
            <div className="subheader">Open to undergraduate students this <b>{currentSemester} {currentYear}</b>.</div>
            <div className="text">Membership is open for {currentSemester.toLowerCase()}! Find a community at UChicago, and have fun while doing so, by joining Green Keys@Uchicago. Membership is a right of every UChicago student and thus joining is as simple as signing up. We will be holding our kickoff meeting soon, so be sure to sign up soon!</div>
          </div>
        }
        {currentSemester == "Summer" && 
          <div className="option">
            <Fade right><a href="https://forms.gle/tboYkc6ZU6akRxoY8" target="_blank"><div className="link">Apply</div></a></Fade>
            <div className="header">INTERESTED IN JOINING?</div>
            <div className="subheader">Open to undergraduate students during <b>{currentYear}</b>.</div>
            <div className="text">Membership will open during fall later this year. Find a community at UChicago, and have fun while doing so, by joining Green Keys@UChicago. Membership is a right of every UChicago student and thus joining is as simple as signing up.</div>
          </div>
        }
        <div className="option">
        <Fade right><a href="https://forms.gle/LdcaXDz628a7aFzE7" target="_blank"><div className="link">Go to officer site</div></a></Fade>
          <div className="header">INTERESTED IN HELPING?</div>
          <div className="subheader">Apply to become an officer through the officer site.</div>
          <div className="text">We are always looking for extra hands to help us out constructing and running the club. Officers are given limitless creative freedom, and have the opportunity to get hands-on experience running a real-world project. </div>
        </div>
      </div>
    </Slide>
  )

}

const ContactSlide = () => {
  return (
    <Slide style={{backgroundColor: "#00784A"}} id="contact">
      <div className="cs">
        <div className="title">Contact us</div>
        <div className="text">For all and any queries, contact <b>GreenKeysChicago@outlook.com</b>.</div>
      </div>
    </Slide>
  )
}

// markup
const IndexPage = () => {
  return (
    <Page>
      <LandingComponent />
      <AfterMain />
      <JoinSlide />
      <ContactSlide />
    </Page>
  )
}

export default IndexPage
