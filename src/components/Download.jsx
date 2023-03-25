import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite} ` } style={{backgroundImage: `url(${assets.banner04})`,backgroundSize: "cover",
    backgroundRepeat:"no-repeat"}}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>求职 招聘 轻松搞定</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>汇聚优秀人才，人岗精准匹配，让招聘效率实现质的飞跃</p>
        </div>
        <div className={styles.flexCenter}>
          <img 
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Download