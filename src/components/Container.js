import React, { Component } from 'react'
import Data from './Data'

export default class Container extends Component {
  state = {
    test: [],
    random: [],
    country: '',
    selectCountry: ''
  }

  async componentDidMount() {
    const url = "https://coronavirus-19-api.herokuapp.com/countries"
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    this.setState({
      test: data,
    })
  }

  handleChange = (event) => {

    let nameOfCountry = event.target.value

    this.setState({
      selectCountry: this.state.test.filter((item)=>item.country === nameOfCountry)[0],
      random: ''
    })
    console.log('clicked')
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.test.length)
    const randData = this.state.test[randNum]
    this.setState({
      random: randData,
      selectCountry: ''
    })
    console.log(randData)
  }

  render() {
    return (

      <Data handleChange={this.handleChange} handleSubmit={this.handleSubmit} selectCountry={this.state.selectCountry} country={this.state.country} random={this.state.random} test={this.state.test}/>


    )
  }
}
