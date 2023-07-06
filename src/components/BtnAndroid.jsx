import React from 'react';
import { AiFillAndroid } from "react-icons/ai";
import styles from '../styles/Global';

const BtnAndroid = ({ assetUrl, link }) => {
  return (
    <div 
      className={styles.btnBlack}
      onClick={() => window.open(link, "_blank")}
    >
      {/* <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} /> */}
      <div>
        <AiFillAndroid size="3rem" style={{color:"#ffffff"}}/>
      </div>
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>Admin</p>
        <p className={`${styles.btnText} font-bold text-sm`}>直播管理</p>
      </div>
    </div>
  )
}

export default BtnAndroid