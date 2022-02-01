import React from 'react';

import { CardView } from './style.js'

import Image from '../../assets/icon_idle.png'
import Back from '../../assets/barra_jackpot.png'

export default function Card() {
    const points = '1000.00';

    return (
        <CardView class="gradient-border" id='box'>
            <main>
                <img src={Image} alt='game' />
            </main>
            <div className='points'>
                <img src={Back} alt="" />
                <p>{points} .pts</p>
            </div>
        </CardView>
    )
}
