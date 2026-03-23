import React from 'react';
import { DiAppstore } from "react-icons/di";
import styles from '../styles/Global';
import { checkWechatRequest, getAppLink } from '../utils/Common';

const BtnMac = ({ assetUrl, link }) => {
  return (
    <div 
      className={styles.btnBlack}
      style={{minWidth:'30%'}}
      onClick={async() => {
      
        const  wechatFlag = checkWechatRequest()
        if(wechatFlag){
          document.getElementById("guideDiv").style.display="block"
        }else{
          const res = await getAppLink(4)
          if(res&&res.success && res.data && res.data.list.length>0){
            window.open(res.data.list[0].url, "_blank")
          }else{
            alert('企业桌面MacOS版本正在上线审核中!');
          }
          
        }
      }}
    >
      {/* <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} /> */}
      <div>
        <DiAppstore size="3rem" style={{color:"#ffffff"}}/>
      </div>
      <div className="flex flex-col justify-start ml-4"  style={{flexGrow:1}}>
        <div className={`${styles.btnText} font-normal text-xs`} style={{textAlign:"center"}}>MacOS</div>
        <div className={`${styles.btnText} font-bold text-sm`}  style={{textAlign:"center"}}>下载</div>
      </div>
    </div>
  )
}

export default BtnMac