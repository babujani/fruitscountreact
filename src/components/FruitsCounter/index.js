import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoesAte: 0, bananasAte: 0}

  mangoCount = () => {
    this.setState(prevState => ({
      mangoesAte: prevState.mangoesAte + 1,
    }))
  }

  bananaCount = () => {
    this.setState(prevState => ({
      bananasAte: prevState.bananasAte + 1,
    }))
  }

  render() {
    const {mangoesAte, bananasAte} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="head">
            Bob ate <span>{mangoesAte}</span> mangoes
            <span>{bananasAte}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit-box">
              <img
                className="fruit-img"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button type="button" onClick={this.mangoCount}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-box">
              <img
                className="fruit-img"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button type="button" onClick={this.bananaCount}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
