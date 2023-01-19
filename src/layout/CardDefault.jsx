import { useState } from "react";
import { ImageDef } from "./constants";
import { ImageSel } from "./constants";

import { Type } from "./constants";
import { Portions } from "./constants";
import { Mouse } from "./constants";

function CardDefault() {
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
              {Type}
            </p>
          </div>
          <div className="card_img_text_block_portions">
            <span />
            {Portions} порций <br />
            {Mouse} в подарок
          </div>
        </div>

        <div className="card-kg card-kg-default">
          <div className="card-kg_count">0,5</div>
          <div className="card-kg_kg">кг</div>
        </div>
      </div>

      <div className="card_after_text card_after_text_default">
        Чего сидишь? Порадуй котэ,{" "}
        <span
          style={{ color: "lightblue", borderBottom: "1px dashed lightblue" }}
        >
          купи
        </span>
        .
      </div>
    </div>
  );
}

export { CardDefault };
