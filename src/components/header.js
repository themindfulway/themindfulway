import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#000000`,
    }}
  >
    <div
      style={{
        padding: `0.5rem 0.5rem`,
        textAlign:'center',
        float:'none'        
      }}
    >
      <h3>
        <Link
          to="/"
          style={{
            color: `#ff9933`,
            textDecoration: `none`,
            textAlign:'center',
            verticalAlign:'top'
          }}
        >          
          {siteTitle}
        </Link>
      </h3>
    <h4 
        style={{            
          textDecoration: `none`,            
        padding: `0rem 0rem`,         
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
          }}
          to="/contact-us"
        >
           &nbsp;&nbsp;Contact us
        </Link>
      </h4>
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
