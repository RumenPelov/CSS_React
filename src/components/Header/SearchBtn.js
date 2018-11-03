import React from 'react';
import Sprite from '../images/sprite.svg';



const SearchBtn = (props) => {


    return  (

            <button className='header__search-button'>
                <svg class="header__search-button-icon">
                 <use xlinkHref={Sprite+"#icon-search"}></use>
                </svg>
            </button>
         
    )
}

export default SearchBtn ;


