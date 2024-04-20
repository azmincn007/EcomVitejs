import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";

export const Example = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  });

  let slides = [
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/801/?random" alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/802/?random" alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/600/803/?random" alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/804/?random" alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/500/800/?random" alt="6" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/805/800/?random" alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  const onChangeInput = (e) => {
    setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState({ goToSlide: state.goToSlide + 1 });
      } else {
        /* right swipe */
        setState({ goToSlide: state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  return (
    <div
      style={{ width: "80%", height: "500px", margin: "0 auto" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
      <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <div>
          <label>Go to slide: </label>
          <input name="goToSlide" onChange={onChangeInput} />
        </div>
        <div>
          <label>Offset Radius: </label>
          <input name="offsetRadius" onChange={onChangeInput} />
        </div>
        <div>
          <label>Show navigation: </label>
          <input
            type="checkbox"
            checked={state.showNavigation}
            name="showNavigation"
            onChange={(e) => {
              setState({ showNavigation: e.target.checked });
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({ config: config.gentle });
            }}
            disabled={state.config === config.gentle}
          >
            Gentle Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({ config: config.slow });
            }}
            disabled={state.config === config.slow}
          >
            Slow Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({ config: config.wobbly });
            }}
            disabled={state.config === config.wobbly}
          >
            Wobbly Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({ config: config.stiff });
            }}
            disabled={state.config === config.stiff}
          >
            Stiff Transition
          </button>
        </div>
      </div>
    </div>
  );
};
