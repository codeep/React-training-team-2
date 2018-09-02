import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MenuItem from './MenuItem';
import Btn from './Btn';

// images

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import img7 from '../img/img7.jpg';
import img8 from '../img/img8.jpg';
import img9 from '../img/img9.jpg';

export default class Menu extends Component {

    constructor() {
        super();
        this.state = {
             pizzaTypes : [
                {'img' : img1, 'title' : 'ՍԻՐԱԿՈՒԶԻ', 'comment' : 'Պանիր, սպիտակ սոուս «Մաջորիո»', 'price' : '1200'},
                {'img' : img2, 'title' : 'ԱՍՍՈՐՏԻ', 'comment' : 'Երշիկ կիսաապխտած, սունկ, լոլիկ, պանիր, սամիթ, սպիտակ սոուս «Մաջորիո»', 'price' : '1700'},
                {'img' : img3, 'title' : 'ԱԼՏՈՆՈ', 'comment' : 'Երշիկ կիսաապխտած, խոզապուխտ, պանիր, սպիտակ սոուս «Մաջորիո»', 'price' : '1600'},
                {'img' : img4, 'title' : 'ՎԵՆԵՑԻԱ', 'comment' : 'Սունկ, հավի կրծքամիս, պանիր, սպիտակ սոուս «Մաջորիո»', 'price' : '2500'},
                {'img' : img5, 'title' : 'ԴԻԱԲԼՈ', 'comment' : 'Խոզապուխտ, սունկ, կծու և կարմիր պղպեղ, պանիր, սպիտակ սոուս «Մաջորիո»', 'price' : '2400'},
                {'img' : img6, 'title' : 'ՎԵԳԵՏԱՐԻԱԿԱՆ', 'comment' : 'Սունկ, լոլիկ, եգիպտացորեն մարինացված, բուլղ. Պղպեղ, պանիր, սպիտակ սոուս «Մաջորիո»', 'price' : '1600'},
                {'img' : img7, 'title' : 'ՊԵՊԵՐՈՆԻ', 'comment' : 'Երշիկ Պեպպերոնի, կծու և բուլղարական պղպեղ, լոլիկ, պանիր, սպիտակ սոուս «Մաջորիո»', 'price' : '2400'},
                {'img' : img8, 'title' : 'ՆԵԱՊՈԼԻՏԱՆԱԿԱՆ', 'comment' : 'Խոզապուխտ, լոլիկ, պանիր, սպիտակ սոուս «Մաջորիո»', 'price' : '2100'},
                {'img' : img9, 'title' : 'ՆՐԲՈՒԹՅՈՒՆ', 'comment' : 'Խոզապուխտ, սունկ, պանիր, սպիտակ սոուս «Մաջորիո»', 'price' : '2000'}
            ]
        }
    }



    render() {


        return (
			<div>
            <div className='text-center'>
                <div className='container Menu'>
                    <div className='row'>
                        {this.state.pizzaTypes.map((value, key) =>{
                            return <MenuItem key={key} img={value.img} title={value.title} comment={value.comment} price={value.price} />
                        })}
                    </div>
                </div>
                <div className='text-center mb-3'>
                    <Link to='/form'><Btn btnTxt='Next' /></Link>
                </div>
            </div>
            <div className="history">
				<span className="span spanActiv">1</span>
				<span className="line"></span>
				<span className="span">2</span>
				<span className="line"></span>
				<span className="span">3</span>
			</div>
			</div>
        );

    }
}
