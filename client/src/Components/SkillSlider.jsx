import React from 'react';
import Slider from 'react-slick';
import SkillTile from './SkillTile';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ReactLogo from '../assets/React.png';
import MUILogo from '../assets/MUI.png';
import NodeLogo from '../assets/Node.png';
import ExpressLogo from '../assets/Express.webp';
import Express from '../assets/Express.png';
import JavaScriptLogo from '../assets/JavaScript.png';
import PythonLogo from '../assets/Python.png';
import CLogo from '../assets/C++.png';
import SQLLogo from '../assets/SQL.png';
import ReactNative from '../assets/ReactNative.webp'

// Data for the skills
const skills = [
  {
    logo: ReactLogo,
    width: '100px',
    height: 'auto',
  },
  {
    logo: ReactNative,
    width: '320px',
    height: 'auto',
  },
  {
    logo: NodeLogo,
    width: '150px',
    height: 'auto',
  },
  {
    logo: Express,
    type: 'express',
    width: 'auto',
    height: '40px',
  },
  {
    logo: MUILogo,
    type: 'mui',
    width: 'auto',
    height: '115px',
  },
  {
    logo: PythonLogo,
    width: '180px',
    height: 'auto',
  },
  {
    logo: CLogo,
    width: '150px',
    height: 'auto',
  },
  {
    logo: SQLLogo,
    width: '130px',
    height: 'auto',
  },
  // ... other skills
];

function SkillsSlider() {
  // Settings for the slider
  const settings = {
    dots: true, // Show dot indicators
    infinite: true, // Infinite looping
    speed: 500, // Animation speed
    slidesToShow: 3, // Number of tiles to show at once
    slidesToScroll: 1, // Number of tiles to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Delay between each auto scroll
    centerMode: true, // Enable centered view
    centerPadding: '0px', // Removes padding
    className: "center",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  };

  return (
    <div style={{border: '1px solid red', marginLeft: '15px', marginRight: '15px'}}>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index}>
            <SkillTile {...skill} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SkillsSlider;
