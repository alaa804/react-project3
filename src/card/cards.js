import React from 'react';
import Card from "./card"
import Imag1 from '../images/a049254b1cf8bb071965287052cc71cf.jpg';
import Imag2 from '../images/asphalt-blur-bricks-858076.jpg';
import Imag3 from '../images/board-game-boss-business-1040157.jpg';



const Cards = () => {
    return (
        
        <div className ="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                <Card imgsrc = {Imag1} title="wall street" parg = "A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. " />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={Imag2} title ="new york" parg ="A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread."/>
                </div>
                <div className="col-md-4">
                <Card imgsrc = {Imag3} title="gambling" parg ="Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough. "/>
                </div>
            </div>
            

        </div>
    )
}


export default Cards ;
