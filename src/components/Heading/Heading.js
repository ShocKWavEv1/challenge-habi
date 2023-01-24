import styled from "styled-components";
import { color, space, variant } from 'styled-system'

export const Heading = styled('span')(
    color,
    space,
    variant({
      variants: {
        //h1
        H1BOLD: {
            fontSize: "120px",
            fontWeight: 900,
        },
        H1MEDIUM: {
            fontSize: "120px",
            fontWeight: 700,
        },
        H1REGULAR: {
            fontSize: "120px",
            fontWeight: 500,
        },
        //h2
        H2BOLD: {
            fontSize: "100px",
            fontWeight: 900,
        },
        H2MEDIUM: {
            fontSize: "100px",
            fontWeight: 700,
        },
        H2REGULAR: {
            fontSize: "100px",
            fontWeight: 500,
        },
        //h3
        H3BOLD: {
            fontSize: "80px",
            fontWeight: 900,
        },
        H3MEDIUM: {
            fontSize: "80px",
            fontWeight: 700,
        },
        H3REGULAR: {
            fontSize: "80px",
            fontWeight: 500,
        },
        //h4
        H4BOLD: {
            fontSize: "70px",
            fontWeight: 900,
        },
        H4MEDIUM: {
            fontSize: "70px",
            fontWeight: 700,
        },
        H4REGULAR: {
            fontSize: "70px",
            fontWeight: 500,
        },
        //h5
        H5BOLD: {
            fontSize: "50px",
            fontWeight: 900,
        },
        H5MEDIUM: {
            fontSize: "50px",
            fontWeight: 700,
        },
        H5REGULAR: {
            fontSize: "50px",
            fontWeight: 500,
        },
        //h6
        H6BOLD: {
            fontSize: "40px",
            fontWeight: 900,
        },
        H6MEDIUM: {
            fontSize: "40px",
            fontWeight: 700,
        },
        H6REGULAR: {
            fontSize: "40px",
            fontWeight: 500,
        },
      }
    })
  )