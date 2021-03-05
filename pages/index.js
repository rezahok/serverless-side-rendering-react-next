import React from 'react'
import Default from '../layouts/default'
import axios from 'axios'

class IndexPage extends React.Component {
  static async getInitialProps({ query: { newsId } }) {
    const { data } = await axios.get(
      'https://api.thedogapi.com/v1/images/search?limit=1'
    )
    return {image: newsId};
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
      'https://api.thedogapi.com/v1/images/search?limit=1'
    )
    this.setState({
      dog: data[0],
      loading: false
    })
  }

  render () {
    let meta = { title: 'This is news', description: 'News description', pic: this.props.image };
    return (
      <Default meta={meta}>
        <div>
          <h1>This is the Front Page.</h1>
          <h3>Random dog of the day:</h3>
          <img src={this.state.dog.url} alt='' />
        </div>
      </Default>
    )
  }
}

export default IndexPage
