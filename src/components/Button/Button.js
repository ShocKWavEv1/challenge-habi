import styled from 'styled-components'
import { variant } from 'styled-system'

export const Button = styled('button')(
  variant({
    variants: {
      solid: {
        color: 'white',
        backgroundColor: 'black.500',
        border: "solid 2px black",
        padding: "14px 35px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        fontSize: "18px",
        fontWeight: 500,
        cursor: "pointer",
        '&:hover': {
            backgroundColor: "black.500" // use polished `lighten`, etc
        }
      },
      outline: {
        color: 'black.500',
        backgroundColor: 'white',
        border: "solid 2px black",
        padding: "14px 35px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        fontSize: "18px",
        fontWeight: 500,
        cursor: "pointer",
        '&:hover': {
            backgroundColor: "black.500", // use polished `lighten`, etc
            color: "white",
            transition:" .3s ease-out",
        }
      },
      inverted: {
        color: 'black.500',
        backgroundColor: 'white',
        border: "solid 2px white",
        padding: "14px 35px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        fontSize: "18px",
        fontWeight: 500,
        cursor: "pointer",
        '&:hover': {
            backgroundColor: "white" // use polished `lighten`, etc
        }
      },
    }
  })
)