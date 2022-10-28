import React from 'react'
import Carousel from "./Carousel";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import one from './images/one.png'
import two from './images/two.png'
import three from './images/three.png'
const TdCards = () => {

    let cards = [
        {
            key: uuidv4(),
            content: (
                <Card imagen={one}/>
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen={two} />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen={three} />
            )
        }
    ];

  return (
      <div className="">
          <Carousel
              cards={cards}
              height="1000px"
              width="70%"
              margin="-20% auto"
              offset={2}
              showArrows={false}
          />
      </div>
  )
}

export default TdCards
