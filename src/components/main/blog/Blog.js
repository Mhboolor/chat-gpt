import React from "react";
import "./Blog.css";
import Image1 from "../../../assets/images/blog1.png";
import Image2 from "../../../assets/images/blog2.png";
import Image3 from "../../../assets/images/blog3.png";
import Image4 from "../../../assets/images/blog4.png";
import Image5 from "../../../assets/images/blog5.png";

function Blog() {
  return (
    <div className="blog">
      <h1 className="blog__title title">
        A lot is happening, <br />
        We are blogging about it.
      </h1>
      <div className="blog__box-container">
        <div className="blog__box">
          <div className="blog__box-item blog__box-item-first">
            <img src={Image1} alt="BlogImage" className="blog__item-img" />
            <div className="blog__item-content">
              <p className="blog__item-date">Sep 26, 2021</p>
              <p className="blog__item-caption blog__item-caption-first">
                GPT-3 and Open AI is the <br /> future. Let us exlore how it{" "}
                <br /> is?
              </p>
              <a href="#" className="blog__item-link">
                Read Full Article
              </a>
            </div>
          </div>
        </div>
        <div className="blog__box">
          <div className="blog__box-item">
            <img src={Image2} alt="BlogImage" className="blog__item-img" />
            <div className="blog__item-content">
              <p className="blog__item-date">Sep 26, 202</p>
              <p className="blog__item-caption">
                GPT-3 and Open AI is the <br /> future. Let us exlore how it is?
              </p>
              <a href="#" className="blog__item-link">
                Read Full Article
              </a>
            </div>
          </div>
          <div className="blog__box-item">
            <img src={Image3} alt="BlogImage" className="blog__item-img" />
            <div className="blog__item-content">
              <p className="blog__item-date">Sep 26, 202</p>
              <p className="blog__item-caption">
                GPT-3 and Open AI is the <br /> future. Let us exlore how it is?
              </p>
              <a href="#" className="blog__item-link">
                Read Full Article
              </a>
            </div>
          </div>
        </div>
        <div className="blog__box">
          <div className="blog__box-item">
            <img src={Image4} alt="BlogImage" className="blog__item-img" />
            <div className="blog__item-content">
              <p className="blog__item-date">Sep 26, 202</p>
              <p className="blog__item-caption">
                GPT-3 and Open AI is the <br /> future. Let us exlore how it is?
              </p>
              <a href="#" className="blog__item-link">
                Read Full Article
              </a>
            </div>
          </div>
          <div className="blog__box-item">
            <img src={Image5} alt="BlogImage" className="blog__item-img" />
            <div className="blog__item-content">
              <p className="blog__item-date">Sep 26, 202</p>
              <p className="blog__item-caption">
                GPT-3 and Open AI is the <br /> future. Let us exlore how it is?
              </p>
              <a href="#" className="blog__item-link">
                Read Full Article
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
