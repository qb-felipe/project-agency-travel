import React from 'react';

import Cover from '../../assets/img/cover.jpg';

export default function Carousel(){
    return(
        <div className="owl-carousel owl-theme">
            
            <div className="item">
                <img src={Cover} alt="" />
            </div>
            <div className="item">
                <img src={Cover} alt="" />
            </div>
            <div className="item">
                <img src={Cover} alt="" />
            </div>
            <div className="item">
                <img src={Cover} alt="" />
            </div>

            <div class="item"><h4>5</h4></div>
            <div class="item"><h4>6</h4></div>
            <div class="item"><h4>7</h4></div>
            <div class="item"><h4>8</h4></div>
            <div class="item"><h4>9</h4></div>
            <div class="item"><h4>10</h4></div>
            <div class="item"><h4>11</h4></div>
            <div class="item"><h4>12</h4></div>
        </div>
    )
}