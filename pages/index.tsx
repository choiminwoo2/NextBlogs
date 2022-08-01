import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { useSelector } from "react-redux";
import { useAppDispath, RootState } from "../store";
import { permuteMode } from "../store/mode";

// export const getServerSideProps = wrapper.getServerSideProps((store) => async() => {
//   store.dispatch(increment());
// })
const Home: NextPage = () => {
  const mode = useSelector((state: RootState) => state.mode.modSelector);
  const dispatch = useAppDispath();
  return (
    <Layout>
      <div></div>
    </Layout>
  );
};

export default Home;
