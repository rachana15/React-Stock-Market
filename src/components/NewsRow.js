import React from "react";
import moment from "moment";
import "../style/css/NewsRow.css";

function NewsRow({ url, source, time, headline, summary, image }) {
  // console.log("soruce>>", source);
  const t = new Date(time * 1000).toLocaleString();
  const fromNow = moment(t).fromNow();
  return (
    <div className="newsrow">
      <article className="newsrow__article">
        <a href={url} className="newsrow__articleLink" target="__blank"></a>
        <div className="newsrow__articleHeader">
          <div className="newsrow__articleHeaderTitle">
            <h4>{source}</h4>
          </div>
          <div className="newsrow__articleTime">
            <span>{fromNow}</span>
          </div>
        </div>
        <div className="newsrow__articleBody">
          <div className="newsrow__articleBodyDescription">
            <div className="newsrow__articleBodyDescriptionHeader">
              <span>{headline}</span>
            </div>
            <div className="newsrow__articleBodyDescriptionBody">
              <span>{summary}</span>
            </div>
          </div>
          <div className="newsrow__articleBodyImage">
            <img src={image} />
          </div>
        </div>
      </article>
    </div>
  );
}

export default NewsRow;
