import React, { useRef } from 'react'
import {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
var Rainbow = require('rainbowvis.js');

const Cursor = (props) => {

  /* Getting the props */
  var numCircles = (props.nums) ? props.nums : 10;
  var startColor = props.startColor ? props.startColor : '#EC7A5B';
  var endColor = props.endColor ? props.endColor : '#DA69D8';

  /* To generate gradients based on start and end colour */
  var numberOfItems = numCircles;
  var rainbow = new Rainbow(); 
  rainbow.setNumberRange(1, numberOfItems);
  rainbow.setSpectrum(startColor, endColor);
  var colors = [];
  for (var i = 1; i <= numberOfItems; i++) {
    var hexColour = rainbow.colourAt(i);
    colors.push('#'+hexColour);
    }

  /* Defining the State hooks */
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });  // To get the mouse position


  let variantList = []; // For framer motion variants
  let circleList=[];
  
  let x= mousePosition.x;
  let y=mousePosition.y;

  // Setting the intitial variants
  for(let i=0; i<numCircles;i++)
  {
    let scale = (numCircles - i) / numCircles;
    variantList.push({
      default: {
        id: i,
        x: x-9 ,
        y: y-9 ,
        backgroundColor: colors[i % colors.length],
        scale: scale
      }});
   }

   /* State for variants */
   const [useVariants, setUseVariants] = useState(variantList);
   
  /* Creating the circles for cursor */
  for(let i=0; i< numCircles; i++){
    circleList.push(<motion.div key={i} className='circle' variants={useVariants[i]} animate="default" />);
   }
   
    useEffect(() => {
        const mousemove = (e) => {
        setMousePosition({    // Getting the current mouse position
            x: e.clientX,
            y:e.clientY
        })
        let x = e.clientX;
        let y = e.clientY;
        let items = [...useVariants];
        items.forEach((el)=>{
            el.default.x=x-9;
            el.default.y=y-9;
        })
        setUseVariants(items); // Setting the variants
        };
        window.addEventListener("mousemove", mousemove);
        requestAnimationFrame(mousemove);
        return () => {
          window.removeEventListener("mousemove", mousemove);
        };
      },[]);


  return (
    <>
        {circleList.map((item)=>{
            return item
        })}
    </>
  )

  }
export default Cursor