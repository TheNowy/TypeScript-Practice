import scss from "./Home.module.scss";
import { Tilt } from "react-tilt";

//Icon_Imports
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Home = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.home_content}>
            <div className={scss.main_page}>
              <div className={scss.main_title}>
                <div className={scss.title_content}>
                  <h3>О нас</h3>
                  <h3>
                    Мы предоставляем вам лучший клиент для <br /> майнкрафта,
                    который даст вам наилучшие <br /> впечатления от игры.
                  </h3>
                </div>
                <div className={scss.button_container}>
                  <button className={scss.buy_dis}>
                    {" "}
                    <LocalMallIcon className={scss.buy}/> Купить
                  </button>
                  <button className={scss.buy_dis}>
                    {" "}
                    Подробнее <ArrowCircleRightIcon className={scss.arrow}/>
                  </button>
                </div>
              </div>
              <div className={scss.nova_gui}>
                <Tilt>
                  <img src="../../../../nova.png" alt="" />
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
