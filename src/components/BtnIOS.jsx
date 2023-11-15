import React from 'react';
import { AiFillApple } from "react-icons/ai";
import styles from '../styles/Global';

const BtnIOS = ({ assetUrl, link }) => {
  return (
    <div 
      className={styles.btnBlack}
      onClick={() => {
        alert('暂不支持IOS系统');
        //window.open(link, "_blank")
      }}
    >
      <div>
        <AiFillApple size="3rem" style={{color:"#ffffff"}}/>
      </div>
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`} style={{textAlign:"center"}}>IOS</p>
        <p className={`${styles.btnText} font-bold text-sm`}>下载</p>
      </div>
    </div>
  )
}

export default BtnIOS