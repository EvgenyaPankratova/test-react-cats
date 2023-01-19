import { CardDefault } from "./CardDefault";
import { CardSelected } from "./CardSelected";
import { CardDisabled } from "./CardDisabled";

function Main(){

    return (
    <main className="main">
            <h1 className="main_title">Ты сегодня покормил кота?</h1>
            <div className="main_container">
            <CardDefault/>
            <CardSelected/>
            <CardDisabled />
            </div>
    </main>
    );  
}

export {Main};