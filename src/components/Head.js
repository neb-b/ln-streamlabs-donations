import NextHead from "next/head";

const Head = (props) => {
  return (
    <NextHead>
      <title>
        {process.env.NODE_ENV === "development" ? "DEV - " : ""}dono.at
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </NextHead>
  );
};

export default Head;
