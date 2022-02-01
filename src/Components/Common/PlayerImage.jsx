import React, { useState, useEffect, useRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  const onLoad = (val) => {
    setLoaded(val);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad(true);
    } else {
      onLoad(false);
    }
  });

  return [ref, loaded, onLoad];
};

const PlayerImage = ({ imageUrl }) => {
  const [ref, loaded, onLoad] = useImageLoaded();

  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: 150, md: 300 },
        height: { xs: 150, md: 300 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        ref={ref}
        onLoad={onLoad}
        src={imageUrl}
        alt=""
        style={{
          width: "auto",
          height: "100%",
        }}
      />

      {!loaded ? (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "35%",
            left: "50%",
          }}
        />
      ) : null}

      {loaded && !imageUrl ? (
        <img
          src="/default-user.jpg"
          alt=""
          style={{
            width: "auto",
            height: "100%",
          }}
        />
      ) : null}
    </Box>
  );
};

export default PlayerImage;
