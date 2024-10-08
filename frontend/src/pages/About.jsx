import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us- Ecommerce"}>
          <div className='row contactus'>
        <div className="col-md-5 ">
            <img src="/images/about.jpeg" alt="About us" style={{width: "100%"}} />
        </div>
        <div className="col-md-4">
            
            <p className="text-justify mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime aliquam incidunt fugiat asperiores iste recusandae ipsa nulla aperiam eaque quam ab veritatis adipisci itaque dolor ducimus quae quis explicabo accusantium exercitationem omnis, distinctio, illum obcaecati dignissimos dicta! Reprehenderit quisquam provident magni assumenda omnis, molestiae accusamus sapiente officiis dignissimos error consequuntur!
            </p>
            
        </div>
    </div>
    </Layout>
  )
}

Layout.defaultProps ={
  title: "Ecommerce app",
  despription:"mern stack Project",
  keywords: "MongoDb, Express, React, Node",
  author: "Nitesh Ogrey"
}

export default About