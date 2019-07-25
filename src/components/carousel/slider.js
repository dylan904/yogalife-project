import React from "react"

import hero1 from "../../../static/img/hero_1.jpg"
import hero2 from "../../../static/img/hero_2.jpg"
import hero3 from "../../../static/img/hero_3.jpg"

import AwesomeSlider from "react-awesome-slider"
import AwsSliderStyles from "./styles/styles"

class SliderGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      intervalId: 0,
      interval: 8000,
      totalImages: 3,
    }
  }

  getImgCt() {
    console.log(this)
    return this.children.length
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  timer() {
    let selected = (this.state.selected + 1) % this.state.totalImages
    this.setState({ selected })
  }

  render() {
    return (
      <AwesomeSlider
        cssModule={AwsSliderStyles}
        selected={this.state.selected}
        onFirstMount={() => {
          //const totalImages = this.getImgCt()
          const intervalId = setInterval(
            this.timer.bind(this),
            this.state.interval
          )
          this.setState({ intervalId })
        }}
      >
        <div data-src={hero1} />
        <div data-src={hero2} />
        <div data-src={hero3} />
      </AwesomeSlider>
    )
  }
}

export default SliderGallery
