import Head from 'next/head'
export default ({ props = { title, description, pic } }) => (
  <div>
    <Head>

      {/* General tags */}
      <title>Shapla Reader</title>
      <meta charSet="utf-8" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name="description" content={props.description || ''} />
      <meta name="image" content={props.pic} />                    

      {/* OpenGraph tags */}
      <meta property="og:title" content={props.title || ''}/>
      <meta property="og:description" content={props.description || ''}/>
      <meta property="og:image" content={props.pic || ''}/>

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title || ''}/>
      <meta name="twitter:description" content={props.description || ''}/>
      <meta name="twitter:image" content={props.pic || ''}/>

    </Head>
  </div>
)
