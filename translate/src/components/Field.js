import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
class Field extends React.Component {
  // the name 'contextType' IS special, if you call it anything else it will not
  // work.
  // static adds a property to the class it self.
  static contextType = LanguageContext;
  render() {
    const text = this.context.language === 'english' ? 'Name': 'Naan';
    return(
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    )
  }
}

export default Field;
