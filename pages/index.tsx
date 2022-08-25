import type { NextPage } from "next";
import { Fragment } from "react";
import ProfileBox from "../components/home/ProfileBox";
import Projects from "../components/projects/projects";
import MySkill from "../components/skill/MySkill";
// export const getServerSideProps = wrapper.getServerSideProps((store) => async() => {
//   store.dispatch(increment());
// })

const Home: NextPage = () => {
  return (
      <Fragment>
      <ProfileBox />
      <MySkill />
      <Projects />
      </Fragment>
  );
};

export default Home;
