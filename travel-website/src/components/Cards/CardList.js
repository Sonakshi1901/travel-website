import React from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem.js";
import "./CardList.css";

function CardList() {
  return(
    <div className="card-list">
     <h1>Check out these EPIC Destinations</h1>
     <div className="cardlist-container">
      <div className="cardlist-wrapper">
         <ul className="cardlist-items">
           <CardItem
            src="images/img-9.jpg"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services"/>

            <CardItem
             src="images/img-2.jpg"
             text="Travel through the Islands of Bali in a Private Cruise"
             label="Luxury"
             path="/services"/>
         </ul>

         <ul className="cardlist-items">
             <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters "
              label="Mystery"
              path="/services"/>

             <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himalayan Mountains"
              label="Adventure"
              path="/services"/>

              <CardItem
               src="images/img-8.jpg"
               text="Ride through the Sahara Desert on a guided Camel Tour"
               label="Adrenaline"
               path="/services"/>
          </ul>
      </div>
     </div>
    </div>
  )
}

export default CardList;
