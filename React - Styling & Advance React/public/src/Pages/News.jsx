import React from 'react'

function News() {
  return (
    <div>
      <div className="blue_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Letest News</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* news section */}
      <div className="news">
        <div className="container">
          <div className="row">
            <div className="col-md-12 margin_top40">
              <div className="row d_flex">
                <div className="col-md-5">
                  <div className="news_img">
                    <figure><img src="images/news_img1.jpg" /></figure>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="news_text">
                    <h3>Specimen book. It has survived not only five</h3>
                    <span>7 July 2019</span>
                    <div className="date_like">
                      <span>Like </span><span className="pad_le">Comment</span>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 margin_top40">
              <div className="row d_flex">
                <div className="col-md-5">
                  <div className="news_img">
                    <figure><img src="images/news_img2.jpg" /></figure>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="news_text">
                    <h3>Specimen book. It has survived not only five</h3>
                    <span>7 July 2019</span>
                    <div className="date_like">
                      <span>Like </span><span className="pad_le">Comment</span>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 margin_top40">
              <div className="row d_flex">
                <div className="col-md-5">
                  <div className="news_img">
                    <figure><img src="images/news_img3.jpg" /></figure>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="news_text">
                    <h3>Specimen book. It has survived not only five</h3>
                    <span>7 July 2019</span>
                    <div className="date_like">
                      <span>Like </span><span className="pad_le">Comment</span>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end news section */}
    </div>

  )
}

export default News
