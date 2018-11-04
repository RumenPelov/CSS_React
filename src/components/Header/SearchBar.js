import React from 'react';

import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

 import DropdownInput from './DropdownInput';
 import SearchInput from './SearchInput';
 import {Categories, Locations} from './searchItems';
 import { lookUp }  from '../../actions';
 
 import IconLocation from '../_images/IconLocation.png';
 import Sprite from '../_images/sprite.svg';
 

class SearchBar extends React.Component {


  onSubmit(values) {    
    this.props.lookUp(values, () => {
      this.props.history.push('/');
    });
  }


render() {
  const { handleSubmit } = this.props;
  return (
     
   
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className='header__search'>
              
            <Field name="search" placeholder="Search for anything..."  component={SearchInput}/>
                  
            <Field name="category" placeholder="Category" items={Categories} component={DropdownInput}/>
            
            <Field name="location" 
                  placeholder="Location" 
                  items={Locations} 
                  image={IconLocation} 
                  component={DropdownInput}
                  sudoVisibility= 'true'/>
                        
            <button type='submit' className='header__search-button'>
              <svg className="header__search-button-icon">
                <use xlinkHref={Sprite+"#icon-search"}></use>
              </svg>
            </button>       
          </div>
        </form>
   
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.search) {
    errors.search = "Enter search"
  }
  if(!values.category) {
    errors.search = "Enter category"
  }
  if(!values.location) {
    errors.search = "Enter location"
  }
   
  return errors;
}

function mapStateToProps(state) {
  if (state.form.searchForm){
    return { 
        initialValues: state.formInit,
        formValues : state.form.searchForm.values
    };
  }
  return { 
    initialValues: state.formInit
};

}

SearchBar = reduxForm({
  validate,
  form: 'searchForm'
  //destroyOnUnmount: false
})(SearchBar);

 SearchBar = connect(mapStateToProps, { lookUp } )(SearchBar);

export default SearchBar;



