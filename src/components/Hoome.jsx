import React from 'react'
import './Styles/Home.css'
import TrueFocus from './templates/TrueFocus';
import RotatingText from './templates/RotatingText';
import ShinyText from './templates/ShinyText';
import TiltedCard from './templates/TitleCard';
import jinoTitleImg from '../assets/public/images/logos/Jino_title.jpg';

function Hoome() {
    return (
        <div className="home-flex-container">
            <div className="home-left">
                <div className='home-main-heading'>
                    <RotatingText
                        texts={['Hello,', 'नमस्ते,', 'Bonjour,', 'നമസ്ക്കാരം,']}
                        mainClassName="italic font-normal text-white text-lg md:text-3xl"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                    <div className='home-main-heading-intro-text'>
                        <h2>I am </h2>
                        &nbsp;
                        &nbsp;
                        <TrueFocus
                            sentence="Jino Baby"
                            manualMode={false}
                            blurAmount={5}
                            borderColor="var(--color-main)"
                            animationDuration={2}
                            pauseBetweenAnimations={1}
                        />
                    </div>
                </div>

                <br />

                <div className='home-main-location'>
                    <ShinyText text="Full Stack Developer & AI/Ml enthusiast | Computer Science Student" disabled={false} speed={3} className='custom-class' />
                </div>
            </div>

            <div className="home-right">
                <TiltedCard
                    imageSrc={jinoTitleImg}
                    captionText="Jino - Contact"
                    containerHeight="1600px"
                    containerWidth="900px"
                    imageHeight="400px"
                    imageWidth="250px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                />
            </div>
        </div>
    );
}

export default Hoome;