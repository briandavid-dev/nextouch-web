import css from "styled-jsx/css";
import "../styles/antd.less";
import "../styles/styles.css";

const stylesCss = css.global`
  .cursor-pointer {
    cursor: pointer;
  }
  .hover-product:hover {
    border-top: 0.5px #c4db83 solid;
    border-radius: 3px;
  }

  .ant-carousel .slick-dots li button {
    background: #23a34e;
    margin-top: 20px;
  }
  .ant-carousel .slick-dots li.slick-active button {
    background: #23a34e;
    opacity: 1;
  }
`;

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
