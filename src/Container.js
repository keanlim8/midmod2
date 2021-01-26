import React, { Component } from 'react'

export default class Container extends Component {
  state = {
    test: [],
    random: [],
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

  handleSubmit = (event) => {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.test.length)
    const randData = this.state.test[randNum]
    this.setState({
      random: randData
    })
    console.log(randData)
  }

  render() {
    return (

        <div className = 'card' >

            <form onSubmit = {this.handleSubmit}>
              < button > 🚨🦠😷🤧🧑‍⚕️🔬🌡🥵🏥🚑💊🩺🧼 < /button>
            </form >

                <h2 > < span > Country: < /span>{this.state.random.country}</h2 >

                <div > < span > Confirmed Cases: < /span>{this.state.random.cases}</div >

                <div > < span > Daily Confirmed Cases: < /span>{this.state.random.todayCases}</div >

                <div > < span > Deaths: < /span>{this.state.random.deaths}</div >

                <div > < span > Recovered: < /span>{this.state.random.recovered}</div >

                <div > < span > Daily Cases: < /span>{this.state.random.active}</div >

                <div > < span > Critical Cases in ICU: < /span>{this.state.random.critical}</div >

                <div > < span > Cases Per Million Popoulation: < /span>{this.state.random.casesPerOneMillion}</div >

                <div > < span > Deaths Per Million Popoulation: < /span>{this.state.random.deathsPerOneMillion}</div >

                <div > < span > Total Tests: < /span>{this.state.random.totalTests}</div >

                <div > < span > Tests Per Million Popoulation < /span>{this.state.random.testsPerOneMillion}</div >

                < br / >

                </div>
    )
  }
}
