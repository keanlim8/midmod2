import React, { useState }from 'react'

const Footer = () => {
  const [url] = useState("https://github.com/keanlim8")

return(
        <footer>
          <p> Made with ❤️ in Boston by <a href={url}>Kean Lim</a></p>

        </footer>
      )
}

export default Footer
