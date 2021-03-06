import React from 'react'
import Default from '../layouts/default'
import axios from 'axios'

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
        <div>
          <h1>Reza is here for the previews.</h1>
          <img src={this.props.newsItem.pic} alt='' />
        </div>
      </Default>
    )
  }
}

export default IndexPage
