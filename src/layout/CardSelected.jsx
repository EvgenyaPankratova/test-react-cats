import { useState } from "react";
import { ImageDef } from "./constants";
import { ImageSel } from "./constants";
import { Type2 } from "./constants";
import { Portions2 } from "./constants";
import { Mouse2 } from "./constants";

function CardSelected() {
  const [activeState, setActiveState] = useState(false);

  return (
    <div className="card">
      <div
        className="card_img_main_block"
        onClick={() => {
          setActiveState((select) => !select);
        }}
      >
        <div className="card_img">
          <img src={`${activeState ? ImageSel : ImageDef}`} alt="cat_card" />
        </div>

        <div className="card_img_text_block">
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
              {Type2}
            </p>
          </div>
          <div className="card_img_text_block_portions">
            <span />
            {Portions2} порций <br />
            {Mouse2} в подарок
          </div>
        </div>

        <div className="card-kg">
          <div className="card-kg_count">2</div>
          <div className="card-kg_kg">кг</div>
        </div>
      </div>
      <div className="card_after_text">
        Головы щучьи с чесноком да свежайшая сёмгушка.
      </div>
    </div>
  );
}

export { CardSelected };
