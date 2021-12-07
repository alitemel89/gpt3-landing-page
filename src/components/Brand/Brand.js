import React from 'react'
import './Brand.css';
import { google, slack, atlassian, dropbox, shopify} from './imports';

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={google} alt="google-icon" />
            </div>
            <div>
                <img src={slack} alt="google-icon" />
            </div>
            <div>
                <img src={atlassian} alt="google-icon" />
            </div>
            <div>
                <img src={dropbox} alt="google-icon" />
            </div>
            <div>
                <img src={shopify} alt="google-icon" />
            </div>
        </div>
    )
}

export default Brand;
