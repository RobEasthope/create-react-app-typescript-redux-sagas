import React from "react";
import Helmet from "react-helmet";

const MetaData = () => {
  return (
    <Helmet>
      {/* Standard meta data - see ./public/index.html for static data */}
      <title>Create React App with Typescript, Redux, and Sagas</title>
      {/* <link rel="canonical" href="" /> */}
      <meta
        property="description"
        content="Create React App with Typescript, Redux, and Sagas"
      />

      {/* Open Graph meta data */}
      <meta
        property="og:title"
        content="Create React App with Typescript, Redux, and Sagas"
      />
      {/* <meta property="og:url" content="" /> */}
      <meta
        property="og:site_name"
        content="Create React App with Typescript, Redux, and Sagas"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Create React App with Typescript, Redux, and Sagas"
      />
      {/* <meta property="og:image" content="" /> */}
      <meta property="og:locale" content="en_GB" />

      {/* Twitter meta data */}
      <meta name="twitter:card" content="summary" />
      {/* <meta name="twitter:site" content="" /> */}
      {/* <meta name="twitter:creator" content="" /> */}
      {/* <meta name="twitter:url" content="" /> */}
      {/* <meta name="twitter:title" content="" /> */}
      <meta
        name="twitter:description"
        content="Create React App with Typescript, Redux, and Sagas"
      />
      {/* <meta name="twitter:image" content="https://example.com/image.jpg" /> */}
    </Helmet>
  );
};

export default MetaData;
