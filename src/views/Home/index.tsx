import React, { useState } from 'react'
import RidneyImg from '../../assets/img/ridney.svg'
import featureIcon from '../../assets/img/feature.svg'
import ProgressBar from '../../components/Progressbar';


import {
    themeClass,
    modalStyle,
    modalContentStyle,
    modalContentWrapperStyle,
    logoWrapperStyle,
    modalTitle,
    modalSubTitle,
    featureWrapper,
    featureItemWrapper,
    featureIconWrapper,
    featureTitle,
    featureDescription,
    planLimitStyle,
    planLimitTextStyle,
    planLimitCounterText,
    planButton
} from '../../assets/style/styles.css';

const Home = () => {
    const [width, setWidth] = useState(0)
    return (
        <div className={themeClass}>

                <div className={modalStyle}>
                    <div className={modalContentWrapperStyle}>
                        <div className={modalContentStyle}>
                            <div className={logoWrapperStyle}>
                                <img src={RidneyImg} alt='' />
                            </div>
                            <div >
                                <h3 className={modalTitle}>Upgrade to Riddey PRO and boost productivity!</h3>
                                <p className={modalSubTitle}>Pellentesque porttitor euismod ante, accumsan consequat purus!</p>
                            </div>
                            <div className={featureWrapper}>
                                <div className={featureItemWrapper}>
                                    <div className={featureIconWrapper}>
                                        <img src={featureIcon} alt='icon' />
                                    </div>
                                    <div>
                                        <h3 className={featureTitle}>
                                            Feature #1 <span className={featureDescription}>- Etiam convallis,</span>
                                        </h3>
                                        <p className={featureDescription}> nibh vitae dui risus</p>
                                    </div>
                                </div>
                                <div className={featureItemWrapper}>
                                    <div className={featureIconWrapper}>
                                        <img src={featureIcon} alt='icon' />
                                    </div>
                                    <div>
                                        <h3 className={featureTitle}>
                                            Feature #2 <span className={featureDescription}>- Etiam </span>
                                        </h3>
                                        <p className={featureDescription}>convallis, nibh vitae dui risus</p>
                                    </div>
                                </div>
                                <div className={featureItemWrapper}>
                                    <div className={featureIconWrapper}>
                                        <img src={featureIcon} alt='icon' />
                                    </div>
                                    <div>
                                        <h3 className={featureTitle}>
                                            Feature #3 <span className={featureDescription}>- Etiam </span>
                                        </h3>
                                        <p className={featureDescription}>convallis, nibh vitae dui risus</p>
                                    </div>
                                </div>

                            </div>
                            <div className={planLimitStyle}>
                                <div>
                                    <h3 className={planLimitTextStyle}>Current usage</h3>
                                    <h3 className={planLimitCounterText}>{width} out of 10 boards in use</h3>
                                    <div>
                                        <ProgressBar width={width} />
                                    </div>
                                </div>

                            </div>
                            <div>
                                <button
                                    disabled={width === 10}
                                    className={planButton}
                                    onClick={() => {
                                        setWidth(width => width + 1)
                                    }}

                                >Add New Board</button>
                            </div>
                        </div>
                    </div>


                </div>

        </div>
    )
}

export default Home