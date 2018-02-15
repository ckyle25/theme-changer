import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      fontColor:'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }
  }

updateColor(val){
  this.setState({
    fontColor: val
  })
}

updateSize(val){
  this.setState({
    fontSize: val
  })
}

updateFamily(val){
  this.setState({
    fontFamily: val
  })
}

updateEditStatus(val){
  this.setState({
    allowEdit: val
  })
}

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle
            update={(v) => this.updateEditStatus(v)}>
          </EditToggle>
          <ColorChanger
            update={(v) => this.updateColor(v)}
            allowEdit={this.state.allowEdit}>
          </ColorChanger>
          <SizeChanger
            update={(v) => this.updateSize(v)}
            allowEdit={this.state.allowEdit}>
          </SizeChanger>
          <FamilyChanger
            update={(v) => this.updateFamily(v)}
            allowEdit={this.state.allowEdit}>
          </FamilyChanger>
        </div>
        <div className="textArea">
          <TextContainer
            fontColor={this.state.fontColor}
            fontSize={this.state.fontSize}
            fontFamily={this.state.fontFamily}>
          </TextContainer>
        </div>
      </div>
    )
  }
}

export default App;
