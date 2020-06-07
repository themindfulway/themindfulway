import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <div><span className="myClass" style={{textAlign: 'center', verticalAlign : 'middle'}} > \n<h1>The Mindful Way</h1></span></div>
        <div>
        
          <table>
            <thead> 
              <tr>   
              <th><span className="myClass" style={{textAlign: 'center', verticalAlign : 'top'}} ><h4><a href= "/">Home</a></h4></span></th>   
              <th><span className="myClass" style={{textAlign: 'center', verticalAlign : 'top'}} ><h4><a href= "/poems">Poems</a></h4></span></th> 
              <th><span className="myClass" style={{textAlign: 'center', verticalAlign : 'top'}} ><h4><a href= "/blogs">Blogs</a></h4></span></th>
              <th><span className="myClass" style={{textAlign: 'center', verticalAlign : 'top'}} ><h4><a href ="/contact-us">Contact us</a></h4></span></th>
              </tr>
            </thead>
          </table>
          
          </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`