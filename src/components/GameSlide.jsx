import React from 'react'
import { SwiperSlide} from 'swiper/react';

function GameSlide({game, active, toggleVideo}) {
  return (
        <SwiperSlide>
                    <div className="gameSlider">
                        <img src={game.img} alt={game.title} />
                        <div className={`video ${active ? 'active' : ''}`}>
                            <iframe width={1280} height={720} src={game.trailer} title={game.title} allow='accelerometer; clipboard-write;encrypted-media;gyroscope;picture-in-picture' allowFullScreen ></iframe>
                        </div>
                        <div className="content">
                            <h1>{game.title}</h1>
                            <p>{game.description}</p>
                            <div className="buttons">
                                <a href="/" className="orderBtn">
                                    Order Now
                                </a>
                                    <a
                                    href="/"
                                    className={`playBtn ${active ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleVideo();
                                    }}
                                    >      
                                       <span className="pause">
                                        <i className="bi bi-pause-fill"></i>
                                    </span>
                                    <span className="play">
                                        <i className="bi bi-play-fill"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
  )
}

export default GameSlide
