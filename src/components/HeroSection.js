import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-3.mp4'autoPlay loop muted/>
            <h1>LA ADVENTURA ESPERA</h1>
            <p>¿Qúe estás esperando?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    COMENZAR AHORA
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    ÉCHALE UN OJO <i className='far fa-play-circle'/>
                </Button>
            </div>           
        </div>
    )
}

export default HeroSection
