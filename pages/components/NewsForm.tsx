import React from "react";

const NewsForm = () => {
  return (
    <div className="News-form-container">
      <form className="news-form">
        <input type="text" placeholder="News Title English" />
        <input type="text" placeholder="News Title Macedonian" />
        <input type="text" placeholder="News Title Serbian" />
        <input type="text" placeholder="News Category English" />
        <input type="text" placeholder="News Category Macedonian" />
        <input type="text" placeholder="News Category Macedonian" />
        <textarea
          cols={20}
          rows={5}
          placeholder="News Description English"
        ></textarea>
        <textarea
          cols={20}
          rows={5}
          placeholder="News Description Macedonian"
        ></textarea>
        <textarea
          cols={20}
          rows={5}
          placeholder="News Description Serbian"
        ></textarea>
        <span>
          <button type="submit">Upload News</button>
        </span>
      </form>
      <div className="news-form-preview-box">
        <h3 className="news-preview-header">Preview</h3>
        
      </div>
    </div>
  );
};

export default NewsForm;
