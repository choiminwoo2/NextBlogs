import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/home/HomePages";
import Layout from "../components/layout/Layout";

// export const getServerSideProps = wrapper.getServerSideProps((store) => async() => {
//   store.dispatch(increment());
// })


const Home: NextPage = () => {
  return (
    <HomePage></HomePage>
  );
};


export default Home;
