import {useState} from 'react';

function Card(props) {
    const {imageSel, imageDef, imageDis, taste, portions, mouse, kg, afterText} = props;

    const [activeState, setActiveState] = useState(false);

    const styleYellow = {
        color: "yellow"
    }
    const styleWhite = {
        color: "white"
    }
    const styleBuy = {
        color: "lightblue", 
        borderBottom: "1px dashed lightblue"
    }
    const styleOpasity = {
        opacity: "0.2" 
    }
    const styleOpasity1 = {
        opacity: "1" 
    }
  
    return (
      <div className="card" >
        <div
          className="card_img_main_block"
          onClick={() => {
            setActiveState((select) => {
              if(taste === 'с курой'){return false}
              return !select}
            );
          }}
        >
          <div className="card_img" >
            <img src={`${activeState ? imageSel : taste === 'с курой' ? imageDis : imageDef }`} alt="cat_card" />
          </div>
  
          <div className="card_img_text_block" style={taste === 'с курой' ? styleOpasity : styleOpasity1}>
            <div style={{ color: "gray" }}>Сказочное заморское яство</div>
            <div>
              <h2 className="card_img_text_block_title">Нямушка</h2>
            </div>
            <div>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                }}
              >
                {taste}
              </p>
            </div>
            <div className="card_img_text_block_portions">
              <span />
              {portions} <br />
              {mouse} в подарок
            </div>
          </div>
  
          <div className="card-kg card-kg-default">
            <div className="card-kg_count">{kg}</div>
            <div className="card-kg_kg">кг</div>
          </div>
        </div>
  
        <div className="card_after_text card_after_text_default" style={afterText === 'Печалька, с курой закончился.' ? styleYellow : styleWhite} >
            {afterText.match(/купи./, 'g') ? afterText.slice(0, -5) : afterText}
            <span style={afterText.match(/купи./, 'g') ? styleBuy : styleWhite}> {afterText.match(/купи/, 'g') ? String(afterText.match(/купи./, 'g')) : ''} </span>
        </div>
      </div>
    );
  }
  
  export { Card };