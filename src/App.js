
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="业聘,您身边的招聘专家!"
        description="好工作尽在业聘,打造您的职场进阶之路!"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="严选 海量职位"
        description="丰富的职位信息覆盖各行各业，更多机会与选择触手可及"
        mockupImg={assets.homeCards}
        reverse
      />
      {/* <Features /> */}
      <SectionWrapper 
        title="简历 填写便捷"
        description="具备结构清晰、简约易填的简历制作框架，更全面地展示自身优势"
        mockupImg={assets.feature}
        banner="banner04"
        
      />
      <SectionWrapper 
        title="投递 快速高效"
        description="只需轻轻一点，简历高效直达HR邮箱，获得offer快人一步"
        mockupImg={assets.mockup}
        reverse
        
      />
      <Download />

      <div className="px-4 py-12 justify-center items-center flex-col text-center ">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          <div style={{marginBottom:"-2rem",color:"#486AFF"}}>
            <p>
            辽宁业聘科技有限公司 | 辽ICP备2021002952号-1
            </p>
            <p>
            xmt@yepin.net.cn | 0411-88170888
            </p>
            <p>
            地址：辽宁省大连保税区东北四街新东方·青年汇1层03号
            </p>
          </div>
        </p>
      </div>
    </>
  );
}

export default App;
