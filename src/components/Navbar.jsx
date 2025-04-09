import React, { useState, useEffect,useRef } from 'react';
import top from '../assets/top.png'
import centerImage from '../assets/center-image.png'
import flower from '../assets/flower.png'
import boy from '../assets/boy.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';
import '../App.css';
import wedding from '../assets/wedding.png';
import music from '../assets/music.mp3';
function Navbar() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [timeLeft2, setTimeLeft2] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const handleOpenMaps = () => {
        window.open('https://maps.app.goo.gl/EtQCuFj36BgimAbZ8', '_blank');
    };
    const handleOpenMaps2 = () => {
        window.open('https://maps.app.goo.gl/drhYgAu6e8M97HDe8', '_blank');
    };
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const handleAutoplay = async () => {
            try {
                if (audioRef.current) {
                    // Modern browsers require a user gesture to play audio
                    await audioRef.current.play();
                    setIsPlaying(true);
                }
            } catch (error) {
                // Autoplay was prevented
                console.log('Autoplay blocked, waiting for user interaction');
                
                // Add event listeners to attempt play on user interaction
                const playOnInteraction = async () => {
                    try {
                        if (audioRef.current) {
                            await audioRef.current.play();
                            setIsPlaying(true);
                            
                            // Remove event listeners after successful play
                            document.removeEventListener('click', playOnInteraction);
                            document.removeEventListener('touchstart', playOnInteraction);
                        }
                    } catch (err) {
                        console.log('Could not play audio');
                    }
                };

                document.addEventListener('click', playOnInteraction);
                document.addEventListener('touchstart', playOnInteraction);
            }
        };

        // Attempt to play audio
        handleAutoplay();

        // Cleanup function
        return () => {
            document.removeEventListener('click', handleAutoplay);
            document.removeEventListener('touchstart', handleAutoplay);
        };
    }, []);
    const targetDate = new Date('2025-04-18T07:52:00');
    const targetDate2 = new Date('2025-04-18T20:36:00');
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const d = Math.floor(difference / (1000 * 60 * 60 * 24));
                const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
            } else {
                clearInterval(timer);
            }
            const difference2 = targetDate2.getTime() - now.getTime();

            if (difference2 > 0) {
                const d2 = Math.floor(difference2 / (1000 * 60 * 60 * 24));
                const h2 = Math.floor((difference2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m2 = Math.floor((difference2 % (1000 * 60 * 60)) / (1000 * 60));
                const s2 = Math.floor((difference2 % (1000 * 60)) / 1000);

                setTimeLeft2({ days: d2, hours: h2, minutes: m2, seconds: s2 });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const renderTimerCircle = (value, label, color) => (
        <div className="timer-circle" style={{
            display: 'inline-block',
            textAlign: 'center'
        }}>
            
            <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Chakra Petch',
                fontSize: '32px',
                fontWeight: 'bold',
            }}>
                {value < 10 ? `0${value}` : value}
            </div>
            <div style={{
                marginTop: '10px',
                color: color,
                fontFamily: 'Chakra Petch',
                fontSize: '16px',
                textAlign: 'center'
            }}>
                {label}
            </div>
        </div>
    );

    const commonTextStyle = {
        fontFamily: "Chakra Petch",
        textAlign: 'center',
        margin: '0px',
        width: '100%'
    };

    return (
        <div className="navbar-container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
        }}>
            <audio 
            ref={audioRef} 
            src={music} 
            loop 
            style={{ display: 'none' }}
            />
            <img
                className="top-left-image"
                src={top}
                alt="Left corner"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    height: '200px',
                    objectFit: 'cover'
                }}
            />

            <div className="content-wrapper" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
            }}>
                <img
                    src={centerImage}
                    alt="Center"
                    style={{
                        marginTop: '30px',
                        width: '91px',
                        objectFit: 'cover'
                    }}
                />

                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: '10px',
                    marginBottom: '0px'
                }}>
                    || Om Sri Ganeshaya Namaha ||
                </h3>

                <h1 style={{
                    ...commonTextStyle,
                    fontFamily: 'Fine Serif',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    fontSize: '30px',
                    marginTop: '20px'
                }}>Upanayanam &</h1>
                <h1 style={{
                    ...commonTextStyle,
                    fontFamily: 'Fine Serif',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    fontSize: '30px',
                    marginBottom: '20px'
                }}>Wedding Invitation</h1>

                <h2 style={{
                    ...commonTextStyle,
                    fontWeight: '300',
                    fontStyle: 'normal',
                    color: '#CBFEF9',
                    marginBottom: '0px'
                }}> Upanayanam </h2>
                <h1 style={{
                    ...commonTextStyle,
                    fontFamily: "Fair Prosper",
                    fontWeight: '300',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    fontSize: '40px',
                    marginTop: '0px',
                    marginBottom: '5px'
                }}>Invitation</h1>

                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: "0px",
                    marginBottom: '20px'
                }}>
                    With Divine Blessings of Sri Datla Venkatapathi Raju(late) & Smt. Kamala Devi(late)
                </h3>
                <h1 style={{
                    ...commonTextStyle,
                    fontFamily: 'Aurora BdCn BT',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: '#CBFEF9',
                    fontSize: '30px'
                }}>Sri Datla Venkata Ramachandra Raju & Smt. Ramadevi</h1>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: "20px",
                    marginBottom: '20px'
                }}>
                    Solicit your esteemed presence with family and friends on the auspicious occasion of
                </h3>
                <h1 style={{
                    ...commonTextStyle,
                    fontFamily: 'Fine Serif',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: '#CBFEF9',
                    fontSize: '20px'
                }}>Upanayanam Ceremony</h1>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: "20px",
                    marginBottom: '20px'
                }}>
                    of
                </h3>
                <h1 style={{
                    ...commonTextStyle,
                    fontFamily: "Fair Prosper",
                    fontWeight: '300',
                    fontStyle: 'normal',
                    color: '#CBFEF9',
                    fontSize: '50px'
                }}>Venkatapathi Varma (Tarun)</h1>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginBottom: '0px'
                }}>
                    (Grand son of
                </h3>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: '0px'
                }}>
                    Smt. & Sri (Late) Datla Venkatapathi Raju & Kamala Devi)
                </h3>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: "20px",
                    marginBottom: '20px'
                }}>
                    on
                </h3>
                <h2 style={{
                    ...commonTextStyle,
                    fontWeight: '800',
                    fontStyle: 'normal',
                    color: '#F8CB0E'
                }}>
                    Friday, 18 April 2025, 07:52 AM
                </h2>

                <img src={boy} className="boy-image" alt="boy" width="60%" style={{ margin: '40px' }} />


                <Button
                    variant="contained"
                    startIcon={<LocationOnIcon />}
                    onClick={handleOpenMaps}
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#333',
                        },
                        marginTop: '10px',
                        fontFamily: 'Chakra Petch'
                    }}
                >
                    Get Directions
                </Button>


                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#CBFEF9',
                    marginBottom: '0px',
                    marginTop: "20px"
                }}>
                    Sumuhurtham
                </h3>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginBottom: '0px',
                    marginTop: '0px'
                }}>
                    On 18th April 2025, at 7:52 a.m
                </h3>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: "0px",
                    marginBottom: '40px'
                }}>
                    Moola Nakshatrayutha Vrushabha lagnam
                </h3>


                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#CBFEF9',
                    marginBottom: '0px'
                }}>
                    at Our Residence
                </h3>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginBottom: '0px',
                    marginTop: '0px'
                }}>
                    Kamala Garden, Gantyada Village,
                </h3>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: '0px',
                    marginBottom: '40px'
                }}>
                    Gantyada mandal, Vizianagaram
                </h3>

                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginBottom: '0px'
                }}>
                    Lunch
                </h3>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: '0px'
                }}>
                    From 12:00 noon onwards
                </h3>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    padding: '20px',
                    width: '100%',
                    marginBottom: '60px'
                }}>
                    {renderTimerCircle(timeLeft.days, 'Days', '#F8CB0E')}
                    {renderTimerCircle(timeLeft.hours, 'Hours', "#CBFEF9")}
                    {renderTimerCircle(timeLeft.minutes, 'Minutes', '#F8CB0E')}
                    {renderTimerCircle(timeLeft.seconds, 'Seconds', "#CBFEF9")}
                </div>

                <h2 style={{
                    ...commonTextStyle,
                    fontWeight: '300',
                    fontStyle: 'normal',
                    color: '#CBFEF9',
                    marginBottom: '0px'
                }}> Wedding </h2>
                <h1 style={{
                    ...commonTextStyle,
                    fontFamily: "Fair Prosper",
                    fontWeight: '300',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    fontSize: '40px',
                    marginTop: '0px',
                    marginBottom: '5px'
                }}>Invitation</h1>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: "0px",
                    marginBottom: '20px'
                }}>
                    With Divine Blessings of Sri Datla Venkatapathi Raju(late) & Smt. Kamala Devi(late)
                </h3>
                <h1 style={{
                    ...commonTextStyle,
                    fontFamily: 'Aurora BdCn BT',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: '#CBFEF9',
                    fontSize: '30px'
                }}>Sri Datla Venkata Ramachandra Raju & Smt. Ramadevi</h1>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: "20px",
                    marginBottom: '20px'
                }}>
                    We Solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our only son
                </h3>
                {/* <h1 style={{
                    ...commonTextStyle,
                    fontFamily: 'Fine Serif',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: '#CBFEF9',
                    fontSize: '30px'
                }}>Wedding</h1>
                <h1 style={{
                    ...commonTextStyle,
                    fontFamily: 'Fine Serif',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: '#CBFEF9',
                    fontSize: '30px'
                }}>Ceremony</h1> */}
                
                <div style={{
                    ...commonTextStyle,
                    color: '#CBFEF9',
                    
                }}><span style={{fontFamily: "Chakra Petch",fontWeight: '300',fontStyle: 'normal'}}>Chy.&nbsp;&nbsp;&nbsp;</span><span style={{fontSize: '45px',fontFamily: "Fair Prosper",fontWeight: '300',fontStyle: 'normal'}}>Venkatapathi Varma (Tarun)</span></div>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginBottom: '0px'
                }}>
                    with
                </h3>
                <div style={{
                    ...commonTextStyle,
                    color: '#CBFEF9',
                    
                }}><span style={{fontFamily: "Chakra Petch",fontWeight: '300',fontStyle: 'normal'}}>Chy. La. Sou.&nbsp;&nbsp;&nbsp;</span><span style={{fontSize: '45px',fontFamily: "Fair Prosper",fontWeight: '300',fontStyle: 'normal'}}>Aasritha</span></div>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginBottom: '0px'
                }}>
                    (Only daughter of Smt. & Sri Raja Vatsavai Venkata Narayana 
                </h3>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: '0px'
                }}>
                    Jagapathi Raju of Peddapuram Village, Kakinada Dist.) 
                </h3>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: "20px",
                    marginBottom: '20px'
                }}>
                    on
                </h3>
                <h2 style={{
                    ...commonTextStyle,
                    fontWeight: '800',
                    fontStyle: 'normal',
                    color: '#F8CB0E'
                }}>
                    Friday 18th April 2025, Night at 08:36 
                </h2>

                <img src={wedding} className="wedding-image" alt="boy" width="50%" style={{ margin: '40px' }} />


                <Button
                    variant="contained"
                    startIcon={<LocationOnIcon />}
                    onClick={handleOpenMaps2}
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#333',
                        },
                        marginTop: '10px',
                        fontFamily: 'Chakra Petch'
                    }}
                >
                    Get Directions
                </Button>


                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#CBFEF9',
                    marginBottom: '0px',
                    marginTop: "20px"
                }}>
                    Sumuhurtham
                </h3>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginBottom: '0px',
                    marginTop: '0px'
                }}>
                    On Friday 18th April 2025, Night at 08:36 
                </h3>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: "0px",
                    marginBottom: '40px'
                }}>
                    Moola Nakshatrayutha Vrucchika Lagnam
                </h3>


                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#CBFEF9',
                    marginBottom: '0px'
                }}>
                    VENUE :
                </h3>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginBottom: '0px',
                    marginTop: '0px'
                }}>
                    KSHATRIYA KALYANA MANDAPAM
                </h3>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: '0px',
                    marginBottom: '40px'
                }}>
                    Seethammadhara, Visakhapatnam
                </h3>

                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginBottom: '0px'
                }}>
                    Dinner
                </h3>
                <h3 style={{
                    ...commonTextStyle,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    color: '#F8CB0E',
                    marginTop: '0px'
                }}>
                    From 8:00 PM onwards
                </h3>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    padding: '20px',
                    width: '100%'
                }}>
                    {renderTimerCircle(timeLeft2.days, 'Days', '#F8CB0E')}
                    {renderTimerCircle(timeLeft2.hours, 'Hours', "#CBFEF9")}
                    {renderTimerCircle(timeLeft2.minutes, 'Minutes', '#F8CB0E')}
                    {renderTimerCircle(timeLeft2.seconds, 'Seconds', "#CBFEF9")}
                </div>
                <img src={flower} alt="flower" width="80%" />
            </div>

            <img
                className="top-right-image"
                src={top}
                alt="Right corner"
                style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    height: '200px',
                    objectFit: 'cover',
                    transform: 'scaleX(-1)'
                }}
            />
        </div>
    );
}

export default Navbar;