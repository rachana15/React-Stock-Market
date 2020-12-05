import React from "react";
import "../style/css/NewsRow.css";

function NewsRow({ url, source, time, headline, summary, image }) {
  console.log("soruce>>", source);
  return (
    <div className="newsrow">
      <article className="newsrow__article">
        <a href={url} className="newsrow__articleLink" target="__blank"></a>
        <div className="newsrow__articleHeader">
          <div class="newsrow__articleHeaderTitle">
            <h4>{source}</h4>
          </div>
          <div className="newsrow__articleTime">
            <span>2h</span>
          </div>
        </div>
        <div class="newsrow__articleBody">
          <div class="newsrow__articleBodyDescription">
            <div class="newsrow__articleBodyDescriptionHeader">
              <span>{headline}</span>
            </div>
            <div class="newsrow__articleBodyDescriptionBody">
              <span>{summary}</span>
            </div>
          </div>
          <div class="newsrow__articleBodyImage">
            <img src={image} />
          </div>
        </div>
      </article>
    </div>
  );
}

export default NewsRow;
