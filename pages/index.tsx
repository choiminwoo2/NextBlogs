import type { NextPage } from "next";
import { Fragment } from "react";
import ProfileBox from "../components/home/ProfileBox";
import ProjectsBox from "../components/projects_1/Projects";
import MySkill from "../components/skill/MySkill";
// export const getServerSideProps = wrapper.getServerSideProps((store) => async() => {
//   store.dispatch(increment());
// })

const Home: NextPage = () => {
  const 
  return (
      <Fragment>
      <ProfileBox />
      <MySkill />
      <ProjectsBox />
      </Fragment>
  );
};

export default Home;
