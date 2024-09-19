// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css';

function App() {
    return (
        <body className='container-fluid'>
            <nav className="navbar">
                <img src="https://ome.tv/images/omegle-alternative-logo.svg" alt="Logo" className="navbar-logo" />
                <ul className="navbar-links">
                    <li><a href="#start">Start</a></li>
                    <li><a href="#about">About Chat</a></li>
                    <li><a href="#code">Why OmeTv</a></li>
                    <li><a href="#code">FAQ</a></li>
                    <li><a href="#code">Rules</a></li>
                </ul>
            </nav>
            <div className='background'>
                <div className='heading text-color font-family'>Discover the thrill of random video chat with OmeTV <br />
                    — the best Omegle alternative!
                </div>

                <div className='small-head text-color fs-1 text-center font-family '>
                    Meet new people in the webcam chat or in the free mobile app
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-7 col-sm-12 col-xs-12 section1">
                        <section>
                            <h3 className='font-family text-color fs-3 fw-medium'>Revel in the unpredictability of a random chat</h3>
                            <p className='text-color fs-4'>OmeTV instantly matches you with a random partner for
                                a conversation. Will you video chat with a girl from
                                across the globe or a guy from around the corner?
                                The thrill lies in the surprise of who you'll come
                                across next!
                            </p>
                            <p className='text-color fs-4'>With hundreds of thousands of online users, you're never
                                short of connections on our platform, the best alternative
                                to Omegle's random video chat. So, if boredom ever strikes,
                                a lively company is just a click away.
                            </p>
                            <p className='text-color fs-4'>Select a preferred country, define your gender or choose
                                “Couple” if you are with a friend. Hit “Start” or swipe
                                and plunge into the excitement of meeting new people.
                            </p>
                        </section>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <section>
                            <div className="phone">
                     
                                <div className="stream">
                                    <video loop Playsinline>
                                        <source type="video/mp4" />
                                    </video>

                                </div>

                                <div className="poster"></div>
                                <div className="frame"></div>
                                <button className="play" aria-lable="Play">
                                </button>
                            </div>
                        </section>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 section3">
                        <section>
                            <h3 className='font-family text-color fs-3 fw-medium'>
                                Enjoy freedom of conversation in a free video chat app
                            </h3>
                            <p className='text-color fs-4'>While it can be challenging to talk to strangers in real
                                life, the free webcam chat offers a safe space for meeting
                                new people with the added benefit of being able to change
                                your conversation partner at any moment.
                            </p>
                            <p className='text-color fs-4'>Besides offering a vibrant cam chat, the app also provides
                                a social network, which allows you to stay in touch with
                                friends, explore a vast gallery of photos and profiles,
                                gain followers, and attract admirers.
                            </p>
                            <p className='text-color fs-4'>
                                Unlike other Omegle-like platforms, OmeTV offers you
                                the genuine freedom to steer your encounters in any
                                direction.
                            </p>
                        </section>
                    </div>

                </div>



            </div>
        </body>
    );
}


export default App;



