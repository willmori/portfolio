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

import './SkillSlider.css';

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

// Custom Next Arrow
function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-next" // Use react-slick's built-in class for positioning
        style={{ display: 'block', color: 'rgb(140, 145, 175)', fontSize: '30px' }} // Your custom style
        onClick={onClick}
      >
        {'>'}
      </div>
    );
  }
  
  // Custom Prev Arrow
  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-prev" // Use react-slick's built-in class for positioning
        style={{ display: 'block', color: 'rgb(140, 145, 175)', fontSize: '30px' }} // Your custom style
        onClick={onClick}
      >
        {'<'}
      </div>
    );
  }
  

  

function SkillsSlider() {
  // Settings for the slider
  const settings = {
    dots: true, // Show dot indicators
    infinite: true, // Infinite looping
    speed: 500, // Animation speed
    slidesToShow: 4, // Number of tiles to show at once
    slidesToScroll: 1, // Number of tiles to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Delay between each auto scroll
    centerMode: true, // Enable centered view
    centerPadding: '0px', // Removes padding
    className: "center",
    nextArrow: null,
    prevArrow: null,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 1
        }
      },
    ]
  };

  

  return (
    <div style={{marginLeft: '15px', marginRight: '15px', cursor: 'grab'}} >
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
