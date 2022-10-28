import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import './waBT.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faWhatsapp}  from '@fortawesome/free-brands-svg-icons'


const WaBt = () => {
    return (<>

        <ReactWhatsapp className='waBT' number="+917020172955" message="We can write any predefined message here..">
        <FontAwesomeIcon className='waIcon' icon={faWhatsapp} />
            <h5>Chat with us</h5>
        </ReactWhatsapp>

    </>
    )
}

export default WaBt
