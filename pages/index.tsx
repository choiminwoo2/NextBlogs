import type { NextPage } from "next";
import { Fragment } from "react";
import ProfileBox from "../components/home/ProfileBox";
import ProjectsBox from "../components/projects_1/Projects";
import MySkill from "../components/skill/MySkill";
// export const getServerSideProps = wrapper.getServerSideProps((store) => async() => {
//   store.dispatch(increment());
// })

const Home: NextPage = () => {
  //기능 추가해야 할것.
  // useRef() 사용해서 scrollTop, scrollEnd 만들기.
  return (
      <Fragment>
      <ProfileBox />
      <MySkill />
      <ProjectsBox />
      </Fragment>
  );
};

export default Home;
