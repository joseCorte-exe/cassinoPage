import React, {useState, useEffect, Fragment} from 'react';

import Exit from '../../assets/logout_idle.png';

import Help from '../../assets/help_idle.png';
import HelpPressed from '../../assets/help_pressed.png';

import EyeOpen from '../../assets/eye_idle.png';
import EyeClosed from '../../assets/eye_off_idle.png';

import { HeaderView } from './style';

export default function Header() {
    const [amount, setAmout] = useState('1000.00');

    const [visible, setVisible] = useState(true);
    const [image, setImage] = useState();

    let points = "12.800.000";

    function handleEye() {
        if (visible) {
            setVisible(false);
            setAmout('----------');
        }else {
            setVisible(true);
            setAmout('1000.00');
        }
        // console.log(visible)
    }

    useEffect(() => {
        visible ? setImage(<img src={EyeOpen} alt=''/> )  : setImage(<img src={EyeClosed} alt=''/>)
        console.log(visible)
    }, [visible]) 

    return (
        <HeaderView>
            <div>
                <img src={Exit} alt="" />
                <img src={Help} alt="" />
            </div>
            <section className='points'>
                <h1>{`$${points}`}</h1>
            </section>
            <div>
                <p>$ {amount}</p>
                <section onClick={() => {
                    handleEye()
                }}>
                    {
                        image
                    }
                </section>
            </div>
        </HeaderView>
    );
}
