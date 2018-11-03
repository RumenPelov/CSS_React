import React from 'react';

          
export default ({input, placeholder ,meta:{error, touched} }) => {

 
    return (
        <input {...input} type="text"
        className="header__search-input" 
        placeholder={placeholder} />
    );
}
          