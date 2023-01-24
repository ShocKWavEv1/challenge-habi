import styled from "styled-components";
import { color, space, variant } from 'styled-system'

export const Text = styled('span')(
    color,
    space,
    variant({
      variants: {
        // text lg
        LGBOLD: {
            fontSize: "28px",
            fontWeight: 900,
        },
        LGMEDIUM: {
            fontSize: "28px",
            fontWeight: 700,
        },
        LGREGULAR: {
            fontSize: "28px",
            fontWeight: 500,
        },
        MDBOLD: {
            fontSize: "24px",
            fontWeight: 900,
        },
        MDMEDIUM: {
            fontSize: "24px",
            fontWeight: 700,
        },
        MDREGULAR: {
            fontSize: "24px",
            fontWeight: 500,
        },
        SMBOLD: {
            fontSize: "20px",
            fontWeight: 900,
        },
        SMMEDIUM: {
            fontSize: "20px",
            fontWeight: 700,
        },
        SMREGULAR: {
            fontSize: "20px",
            fontWeight: 500,
        },
        XSBOLD: {
            fontSize: "17px",
            fontWeight: 900,
        },
        XSMEDIUM: {
            fontSize: "17px",
            fontWeight: 700,
        },
        XSREGULAR: {
            fontSize: "17px",
            fontWeight: 500,
        },
      }
    })
  )