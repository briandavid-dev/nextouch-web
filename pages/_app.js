import css from "styled-jsx/css";
import "../styles/antd.less";
import "../styles/styles.css";

const stylesCss = css.global``;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {stylesCss}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
