import { useState } from "react";
import { ImageDis } from "./constants";
import { Type3 } from "./constants";
import { Portions3 } from "./constants";
import { Mouse3 } from "./constants";

function CardDisabled() {

  return (
    <div className="card">
      <div
        className="card_img_main_block"
      >
        <div className="card_img">
          <img src={ImageDis} alt="cat_card" />
        </div>

        <div className="card_img_text_block" style={{ opacity: "0.2" }}>
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
              {Type3}
            </p>
          </div>
          <div className="card_img_text_block_portions">
            <span />
            {Portions3} порций <br />
            {Mouse3} в подарок <br />
            заказчик доволен
          </div>
        </div>

        <div className="card-kg">
          <div className="card-kg_count">5</div>
          <div className="card-kg_kg">кг</div>
        </div>
      </div>
      <div className="card_after_text" style={{ color: "yellow" }}>
        Печалька, с курой закончился.
      </div>
    </div>
  );
}

export { CardDisabled };
