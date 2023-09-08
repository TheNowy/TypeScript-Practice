import scss from "./Home.module.scss";

// import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.home_content}>
            <div className={scss.main_page}>
              <div className={scss.main_title}>
                <h1>О нас</h1>
                <h3>
                  Мы предоставляем вам лучший клиент для <br /> майнкрафта,
                  который даст вам наилучшие <br /> впечатления от игры.
                </h3>
              </div>
              <div className={scss.nova_gui}>
                
                <img src="../../../../nova.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
