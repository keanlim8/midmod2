import React from 'react'

const Data = (props) => {
  let currentCountry = props.random ? props.random : props.selectCountry
  console.log(props.selectCountry)
  return(
    <div className = 'card' >

        <form onSubmit = {props.handleSubmit}>
          < button > 🎲Randomize Country🎲 < /button>
           <br></br>
          < select onChange = {props.handleChange}>
            {props.test.map((items, i) => <option key={i}> {items.country}</option>)}

          </select>
        </form >

            <h2 > < span > Country: < /span>{currentCountry.country}</h2 >

            <div > < span > Confirmed Cases: < /span>{currentCountry.cases}</div >

            <div > < span > Daily Confirmed Cases: < /span>{currentCountry.todayCases}</div >

            <div > < span > Deaths: < /span>{currentCountry.deaths}</div >

            <div > < span > Recovered: < /span>{currentCountry.recovered}</div >

            <div > < span > Daily Cases: < /span>{currentCountry.active}</div >

            <div > < span > Critical Cases in ICU: < /span>{currentCountry.critical}</div >

            <div > < span > Cases Per Million Popoulation: < /span>{currentCountry.casesPerOneMillion}</div >

            <div > < span > Deaths Per Million Popoulation: < /span>{currentCountry.deathsPerOneMillion}</div >

            <div > < span > Total Tests: < /span>{currentCountry.totalTests}</div >

            <div > < span > Tests Per Million Popoulation: < /span>{currentCountry.testsPerOneMillion}</div >

            < br / >

            </div>
  )
}

export default Data
