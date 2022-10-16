import React from 'react';
import ReactDOM from 'react-dom/client';

class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.state = {scale:'c',temp:0}
  }
}

handleCelsius = (e)=>{
  this.setState({scale:'c',temp:e.target.value})
}

handleFarenheit = (e)=>{
  this.setState({scale:'f',temp:e.target.value})
}


render()
{
  const temp = this.state.temp
  const scale = this.state.scale
  const Celsius = scale === 'f'?(temp -32)*5/9 : temp;
  const Farenheit = scale === 'c'?(temp*9/5) + 32 : temp;
  return(
    <div>
    <fieldset>
      <legend>Scale Celsius</legend>
      <input value={Celsius} onChange={this.handleCelsius}/>
    </fieldset>

    <fieldset>
      <legend>Scale Farenheit</legend>
      <input value={Farenheit} onChange={this.handleFarenheit}/>
    </fieldset>
    </div>
  )
}
