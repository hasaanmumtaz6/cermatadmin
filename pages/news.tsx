import React from 'react'
import Layout from './components/Layout'
import NewsForm from './components/NewsForm'

const News = () => {
  return (
    <Layout title='News - Cermat Admin'>
      <div className='News-form-container'>
        <h3 className='news-header'>News</h3>
        <NewsForm />
      </div>
    </Layout>
  )
}

export default News