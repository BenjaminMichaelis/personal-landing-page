import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

function Footer() {
    return (
        <div className="Footer container">
            <p>Made with <span class="heart">❤️</span> by <a href="https://github.com/BenjaminMichaelis" target="_blank" rel="noopener noreferrer">Benjamin Michaelis</a></p>
            <a href="https://github.com/BenjaminMichaelis/personal-landing-page" target="_blank" rel="noopener noreferrer">
                    <div class="link">
                        <i class="fab fa-github fa-2x"></i>
                    </div>
                </a>
        </div>
    )
}

export default Footer
