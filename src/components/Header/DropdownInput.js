import React, { Component } from 'react'
import Sprite from '../images/sprite.svg';

export default class DropdownInput extends Component {

  renderDropdownItems() {
    const { input: { onChange } } = this.props;

    if(this.props.items) {
        return this.props.items.map((value, key) => {
          return <button className="dropdown__content-item" key={key} type="button" onClick={() => onChange(value)}>{value}</button>
      });
    }
    return ;
  }

  renderBtnValue() {
    const { input: { value }, placeholder } = this.props;

    if(value) {
      return value;
    }
      return placeholder;
  }

  renderIcon() {
    if(this.props.icon){
      return  ( <svg className="dropdown__icon-default">
                   <use xlinkHref={Sprite+"#"+this.props.icon}></use>
                </svg> );

    } else if (this.props.image) {
      return <img src={this.props.image} style={this.props.imgStyle} alt=""/>
    }

    return  ( <svg className="dropdown__icon-default">
                <use xlinkHref={Sprite+"#icon-chevron-small-down"}></use>
              </svg> );
  }
 
  render() { 

    const {sudoVisibility, placeholder} = this.props;
  
    return (
      <div className="dropdown">
        <div className="dropdown__btn">
          <div className="dropdown__text">
            <div>
              <span> {this.renderBtnValue()}</span> 
            </div>
            <div>
             {this.renderIcon()}
            </div>
          </div>
        </div>

        <div className="dropdown__content">
          {this.renderDropdownItems()}
          
        </div>

        <div className={sudoVisibility ?  "dropdown__sudo dropdown__sudo-visible" : "dropdown__sudo"} >
          Change {placeholder}
        </div>
        
      </div>
    )
  }
}

