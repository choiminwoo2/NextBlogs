import type { NextPage } from "next";
import { Fragment } from "react";
import Particles from "react-tsparticles";
import ProfileBox from "../components/home/ProfileBox";
import MySkill from "../components/skill/MySkill";
// export const getServerSideProps = wrapper.getServerSideProps((store) => async() => {
//   store.dispatch(increment());
// })

const Home: NextPage = () => {
  return (
      <ProfileBox />
  );
};

export default Home;
