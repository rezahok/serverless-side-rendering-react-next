import React from 'react'
import Default from '../layouts/default'
import axios from 'axios'
import '../style.css';

class IndexPage extends React.Component {
  static async getInitialProps({ query: { newsId } }) {

    const { data } = await axios.get(
      'https://api.shapla.app/singlenews?id=' + newsId
    )

    let newsItem = (data['news'])[0];

    return {newsItem: newsItem};
  }

  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  render () {
    let meta = { title: this.props.newsItem.title, 
                 description: this.props.newsItem.first_paragraph, 
                 pic: this.props.newsItem.pic 
                };

    return (
      <Default meta={meta}>

        <div className="container">
          <div className="logoContainer">
            <img src="/images/logo_grey.png" className="logo" />
            <p className="title">
              শাপলা নিউজ রিডার
              </p>
          </div>

          <div className="newsBody">
              <div className="titleDeco">
                  <h1 className="newsheader">{this.props.newsItem.title}</h1>
                  <h1 className="metadata">{this.props.newsItem.news_source}  •  {this.props.newsItem.category}</h1>
              </div>

              <div className="dsiplay-linebreak">
                  <p className="newsText">
                    {this.props.newsItem.first_paragraph}
                  </p>

                  <div className="dsiplay-linebreak">
                    <img src={this.props.newsItem.pic} className="bodyImg" />         
                            
                    <p className="newsText">
                      {this.props.newsItem.news_details}
                    </p>
                  </div>                  
              </div>

              <div className="sourcecontainer">
                  <a className="source" href={this.props.newsItem.source_url} target="blank">
                    {this.props.newsItem.news_source}
                  </a>
                  <div className="news_date"> {this.props.newsItem.published_date}</div>
              </div>
          </div>

          <div className="footer">
            <p className="message">
              আপনি শাপলা নিউজ রিডার অ্যাপটির দ্বারা শেয়ার করা ওয়েবে একটি নিউজ আর্টিকেল পড়ছেন।
              <br />   <br />
              আরও ভাল সংবাদ পড়ার অভিজ্ঞতার জন্য শাপলা অ্যাপটি ডাউনলোড করুন।
              </p>

            <a href="https://play.google.com/store/apps/details?id=com.rongpencil.shapla">
              <img src="/images/android.png" className="download_btn" />
            </a>

            <a href="https://apps.apple.com/ca/app/shapla-bangla-news-reader/id1540395773">
              <img src="/images/ios.png" className="download_btn" />
            </a>
            </div>
        </div>

      </Default>
    )
  }
}

export default IndexPage