import React, { useState, useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
// import "./styles.css"
import "keen-slider/keen-slider.min.css";
import { CarouselContainer } from "./carouselStyles";

const Carousel = (props) => {
    const [pause, setPause] = useState(false);
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const timer = useRef();
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 3000,
        dragStart: () => {
            setPause(true);
        },
        dragEnd: () => {
            setPause(false);
        },
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide);
        },
    });

    useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true);
        });
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false);
        });
    }, [sliderRef]);

    useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next();
            }
        }, 5000);
        return () => {
            clearInterval(timer.current);
        };
    }, [pause, slider]);

    return (
        <CarouselContainer>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                        <div className="content">
                            <h1>
                                Bonema <span>Medical</span>
                            </h1>
                            <p>
                                We strive to improve access to better, safer and
                                cost effective health care. Our client portfolio
                                includes Netcare Group, Louis Pasteur, Private
                                and Government hospitals.
                            </p>
                            <a href="/contact">
                                <button>Contact us</button>
                            </a>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <div className="content">
                            <h1>
                                Bonema <span>Medical</span>
                            </h1>
                            <p>
                                We strive to improve access to better, safer and
                                cost effective health care. Our client portfolio
                                includes Netcare Group, Louis Pasteur, Private
                                and Government hospitals.
                            </p>
                            <a href="/contact">
                                <button>Contact us</button>
                            </a>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <div className="content">
                            <h1>
                                Bonema <span>Medical</span>
                            </h1>
                            <p>
                                We strive to improve access to better, safer and
                                cost effective health care. Our client portfolio
                                includes Netcare Group, Louis Pasteur, Private
                                and Government hospitals.
                            </p>
                            <a href="/contact">
                                <button>Contact us</button>
                            </a>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide4">
                        <div className="content">
                            <h1>
                                Bonema <span>Medical</span>
                            </h1>
                            <p>
                                We strive to improve access to better, safer and
                                cost effective health care. Our client portfolio
                                includes Netcare Group, Louis Pasteur, Private
                                and Government hospitals.
                            </p>
                            <a href="/contact">
                                <button>Contact us</button>
                            </a>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide5">
                        <div className="content">
                            <h1>
                                Bonema <span>Medical</span>
                            </h1>
                            <p>
                                We strive to improve access to better, safer and
                                cost effective health care. Our client portfolio
                                includes Netcare Group, Louis Pasteur, Private
                                and Government hospitals.
                            </p>
                            <a href="/contact">
                                <button>Contact us</button>
                            </a>
                        </div>
                    </div>
                </div>
                {slider && (
                    <>
                        <ArrowLeft
                            onClick={(e) =>
                                e.stopPropagation() || slider.prev()
                            }
                            disabled={currentSlide === 0}
                        />
                        <ArrowRight
                            onClick={(e) =>
                                e.stopPropagation() || slider.next()
                            }
                            disabled={
                                currentSlide === slider.details().size - 1
                            }
                        />
                    </>
                )}
                {slider && (
                    <div className="dots">
                        {[...Array(slider.details().size).keys()].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        slider.moveToSlideRelative(idx);
                                    }}
                                    className={
                                        "dot" +
                                        (currentSlide === idx ? " active" : "")
                                    }
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </CarouselContainer>
    );
};

export default Carousel;

function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--left" + disabeld}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
    );
}

function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--right" + disabeld}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
    );
}
