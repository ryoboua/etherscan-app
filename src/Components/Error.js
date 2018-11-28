import React from 'react'
import { Share } from 'grommet-icons';


export default ({ searchTerm, query }) => (
    <div style={{ width: '100%', textAlign: 'center', padding: '1em' }}>
        <h1 >Sorry, We Are Unable To Locate The {searchTerm}</h1>
        <p>
            See if etherscan.io can load the {searchTerm}  
            <a 
                href={`https://etherscan.io${query}`} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <Share />
            </a>
        </p>
    </div>
)