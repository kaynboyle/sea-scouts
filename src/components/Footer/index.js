import React from 'react';

const Footer = () => {
    return(
        <footer className='w-100 mt-auto bg-secondary p-4'>
            <div className='footer-container'>
                &copy;{new Date().getFullYear()} Cherry Solutions. All Rights Reserved


            </div>
            <div id="target-bottom">
             
            </div>
            
        </footer>
    );
};

export default Footer;