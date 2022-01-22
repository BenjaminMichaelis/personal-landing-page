import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

function Footer() {
    return (
        <div className="Footer container">
            <p>Made with <span class="heart">❤️</span> by <a href={"github.com/BenjaminMichaelis"}>Benjamin Michaelis</a></p>
            <a href="https://github.com/BenjaminMichaelis/LinkLandingPage" target="_blank" rel="noopener noreferrer">
                    <div class="link">
                        <i class="fab fa-github"></i>
                    </div>
                </a>
        </div>
    )
}

export default Footer
