import React from 'react';

const MyFooter = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                <p>All Rights Reserved | {new Date().getFullYear()}</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default MyFooter;