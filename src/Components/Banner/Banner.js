import { Component } from 'react';
import './Banner.scss';

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 1,
      speed: 300,
    };
  }

  prevSlide = () => {
    this.state.slideIndex > 0
      ? this.setState({
          slideIndex: this.state.slideIndex - 1,
          speed: 300,
        })
      : this.setState({ slideIndex: this.state.slideIndex - 1 });
  };

  nextSlide = () => {
    this.state.slideIndex < 4
      ? this.setState({
          slideIndex: this.state.slideIndex + 1,
          speed: 300,
        })
      : this.setState({ slideIndex: this.state.slideIndex + 1 });
  };

  componentDidMount() {
    setInterval(e => {
      this.state.slideIndex < 4 &&
        setTimeout(() => {
          this.setState({ slideIndex: this.state.slideIndex + 1, speed: 300 });
        }, 2000);
    }, 2000);
  }

  nextSlideTrick = () => {
    this.state.slideIndex === 4 &&
      setTimeout(() => {
        return this.setState({ speed: 0, slideIndex: 1 });
      }, 300);
  };

  prevSlideTrick = () => {
    this.state.slideIndex === 0 &&
      setTimeout(() => {
        return this.setState({ speed: 0, slideIndex: 3 });
      }, 300);
  };

  componentDidUpdate() {
    this.nextSlideTrick();
    this.prevSlideTrick();
  }

  render() {
    const { speed, slideIndex } = this.state;

    return (
      <div className="carouselContainer">
        <div className="slideWrap">
          <div className="slideBox">
            <div
              className="slideList"
              style={{
                width: IMGSRC.length * 1140 + 'px',
                transition: speed + `ms`,
                transform: `translate3d(
                    ${slideIndex * -1140}px, 0px, 0px`,
              }}
            >
              {IMGSRC.map((source, index) => {
                return (
                  <div className="slide" key={index}>
                    <img
                      src={source}
                      alt="슬라이드"
                      className="slideItem"
                      id={`${index}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bannerButton">
          <button className="prev" onClick={this.prevSlide}>
            <i className="fas fa-arrow-left" />
          </button>
          <button className="next" onClick={this.nextSlide}>
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    );
  }
}
const IMGSRC = [
  '/images/slider1.jpg',
  '/images/slider2.jpg',
  '/images/slider3.jpg',
  '/images/slider1.jpg',
  '/images/slider2.jpg',
];
export default Banner;
