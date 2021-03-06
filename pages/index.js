import React from 'react'
import Default from '../layouts/default'
import axios from 'axios'

class NewsDetailsPage extends React.Component {
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
      loading: true,
      meta: {}, 
      dog: {}
    }
    this.fetchData = this.fetchData.bind(this)
  }
 
  async componentDidMount () {
    await this.fetchData()
  }

  async fetchData () {
    this.setState({ loading: true })
    const { data } = await axios.get(
      'https://api.shapla.app/singlenews?id=' + newsId
    )

    this.setState({
      newsItem: (data['news'])[0],
      loading: false
    })
  }

  render () {
    let meta = { title: this.props.newsItem.title, 
                 description: this.props.newsItem.first_paragraph, 
                 pic: this.props.newsItem.pic 
                };

    return (
      <Default meta={meta}>
        <div>
          <img src={this.state.newsItem.pic} alt='' />
        </div>
      </Default>
    )
  }
}

export default NewsDetailsPage
