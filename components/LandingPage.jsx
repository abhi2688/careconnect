import React from "react";
import Box from "@mui/material/Box";
import Carousel from "./Wrappers/Carousel";

const crsImageLinks = [
  "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  "https://images.unsplash.com/photo-1563233269-7e86880558a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80",
];

const LandingPage = () => {
  return (
    <>
      <Box
        width={"100%"}
        height={{
          xs: "395px",
          sm: "395px",
          md: "500px",
          lg: "65vh",
          xl: "75vh",
        }}
      >
        <Carousel>
          {crsImageLinks.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  height: {
                    xs: "370px",
                    sm: "370px",
                    md: "500px",
                    lg: "65vh",
                    xl: "75vh",
                  },
                  bgcolor: "secondary",
                  backgroundImage: `url("${item}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              ></Box>
            );
          })}
        </Carousel>
      </Box>
    </>
  );
};

export default LandingPage;
