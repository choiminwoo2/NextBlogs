import type { NextPage } from "next";
import { Fragment } from "react";
import Particles from "react-tsparticles";
import ProfileBox from "../components/home/ProfileBox";
// export const getServerSideProps = wrapper.getServerSideProps((store) => async() => {
//   store.dispatch(increment());
// })

const Home: NextPage = () => {
  return (
      <ProfileBox />
  );
};

export default Home;
