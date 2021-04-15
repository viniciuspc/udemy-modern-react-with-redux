import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
class Button extends React.Component{
  // Example of obteing information from the context using a Consumer.
  // This is more indicate to when there are more code to run over the result.
  // Since it forces us to implemente a function to receive the context information.
  // And when we want to pull information from multiple context providers.
  renderSubmit(language){
    return language === 'english' ? 'Submit' : 'Voorleggen'
  }

  renderButton(color){
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({language}) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    )
  }
  
  render() {
    return (
      <ColorContext.Consumer>
      { (color) => this.renderButton(color)}
    </ColorContext.Consumer>
    )
  }
}

export default Button;