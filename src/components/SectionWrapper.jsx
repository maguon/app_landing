import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';
import BtnAndroid from './BtnAndroid';
import BtnIOS from './BtnIOS';

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
  return (
    <div className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${banner}`}>
      <div className={`flex items-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}>
        <div className={`${styles.descDiv} 
          ${reverse ? " fadeRightMini" : " fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
        `}>
          <h1 className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}>{title}</h1>
          <p className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}>{description}</p>
          {showBtn && (
            <div style={{flex: 1,flexDirection:"row",display:"flex",justifyContent:"space-between"}}>
              <BtnAndroid 
                assetUrl={assets.logo}
                link="https://www.pgyer.com/Dmxf"
              />
              <BtnIOS 
                assetUrl={assets.logo}
                link="https://apps.apple.com/cn/app/%E4%B8%9A%E8%81%98/id1576659323"
              />
            </div>
          )}
        </div>
        <div
          className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}
        >
          <img src={mockupImg} alt="mockup" className={`
           ${reverse ? " fadeLeftMini" : " fadeRightMini"}
          ${styles.sectionImg}`} />
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper