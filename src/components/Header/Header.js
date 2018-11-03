import React from 'react';

import SearchBar from './SearchBar';


export default class Example extends React.Component {


  render() {
    return (
     
        <div className='header'>
          
          <div className='header__container'>
            
              <h1 className="header__text"> Doming consetetur conclusionemque vis ex, te duo odio accumsan</h1>
           
              <SearchBar history= {this.props.history} />
          
          </div> 
        </div>
       
        );
  }
}

