import { Card } from "./Card";
// import { CardSelected } from "./CardSelected";
// import { CardDisabled } from "./CardDisabled";

import photoDefault from '../img/Photo.png'
import photoSelected from '../img/Selected.png'
import photoDisabled from '../img/Disabled.png'

function Main(){

    const data = [
        {imageSel: photoSelected,
        imageDef: photoDefault,
        imageDis: photoDisabled,
        taste: 'фуа-гра',
        portions: '10 порций',
        mouse: '1 мышь',
        kg: 0.5,
        afterText: 'Чего сидишь? Порадуй котэ, купи.'
     },
        
        {imageSel: photoSelected,
        imageDef: photoDefault,
        imageDis: photoDisabled,
        taste: 'с рыбой',
        portions: '20 порций',
        mouse: '2 мыши',
        kg: 2,
        afterText: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
     },

        {imageSel: photoSelected,
        imageDef: photoDefault,
        imageDis: photoDisabled,
        taste: 'с курой',
        portions: '100 порций',
        mouse: '5 мышей',
        kg: 5,
        afterText: 'Печалька, с курой закончился.'
     }
]

    return (
    <main className="main">
            <h1 className="main_title">Ты сегодня покормил кота?</h1>
            <div className="main_container">
            {data.map(item => (
                <Card key={Date.now()} {...item}/>))}
            </div>
    </main>
    );  
}

export {Main};