import scss from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.home_content}>
            <h1>Home</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
