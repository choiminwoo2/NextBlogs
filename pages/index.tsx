import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { useSelector } from "react-redux";
import { useAppDispath, RootState } from "../store";
import { increment, decrement, payloadMinus } from "../store/mode";

// export const getServerSideProps = wrapper.getServerSideProps((store) => async() => {
//   store.dispatch(increment());
// })
const Home: NextPage = () => {
  const counter = useSelector((state: RootState) => state.mode.counter);
  const dispatch = useAppDispath();
  return (
    <Layout>
      <div>
        <div>counter</div>
        <div>
          <button onClick={() => dispatch(decrement())}>-</button> {counter}{" "}
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(payloadMinus(5))}> +5 </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
