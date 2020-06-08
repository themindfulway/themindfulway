import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#000000`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#ff9933`,
            textDecoration: `none`,
            textAlign:"left",
            verticalAlign:'top',
            float:"left"
          }}
        >          
          {siteTitle}&nbsp;&nbsp;
        </Link>
      </h3>
      <h4 
        style={{ 
          margin: 0,            
          textDecoration: `none`,            
        padding: `0.3rem 0rem`,         
          textAlign:'center',
            float:'none' 
            }}
      >
        <Link
          style={{     
          textDecoration: `none`     
          }}
          to="/"
        >
          Home 
        </Link>
        <Link
          style={{     
          textDecoration: `none`     
          }}
          to="/poems"
        >
           &nbsp;&nbsp;Poems
        </Link>
        <Link
          style={{     
          textDecoration: `none`     
          }}
          to="/blogs"
        >
           &nbsp;&nbsp;Blogs
        </Link>
        <Link
          style={{     
          textDecoration: `none`,
          float:'right'    
          }}
          to="/contact-us"
        >
           &nbsp;&nbsp;&nbsp;&nbsp;Contact us
        </Link>
      </h4>
      <br></br>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
