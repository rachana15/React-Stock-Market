import React from "react";
import "../style/css/NewsRow.css";
import Logo from "../style/images/logo.png";

function NewsRow() {
  return (
    <div className="newsrow">
      <article className="newsrow__article">
        <a href="" className="newsrow__articleLink"></a>
        <div className="newsrow__articleHeader">
          <div class="newsrow__articleHeaderTitle">
            <h4>Bazinga</h4>
          </div>
          <div className="newsrow__articleTime">
            <span>2h</span>
          </div>
        </div>
        <div class="newsrow__articleBody">
          <div class="newsrow__articleBodyDescription">
            <div class="newsrow__articleBodyDescriptionHeader">
              <span>This is the header</span>
            </div>
            <div class="newsrow__articleBodyDescriptionBody">
              <span>This is the body</span>
            </div>
          </div>
          <div class="newsrow__articleBodyImage">
            <img src={Logo} />
          </div>
        </div>
      </article>
    </div>
  );
}

export default NewsRow;
