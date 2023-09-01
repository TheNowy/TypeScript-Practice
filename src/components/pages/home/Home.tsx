import scss from "./Home.module.scss";
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.home_content}>
          <h1><GitHubIcon></GitHubIcon></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
