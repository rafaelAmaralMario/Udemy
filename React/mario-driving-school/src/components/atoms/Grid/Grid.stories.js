import React from "react";
import styled from 'styled-components';

import Grid from "./Grid";


const Box = styled.div`
  height: 200px;
  background-color: indigo;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 35px;
`;


export default {
  title: "Components|Atoms/Grid",
  component: Grid,
};

export const usage = () => (
  <Grid sm={2} md={3} lg={4} xl={5}>
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
    <Box>4</Box>
    <Box>5</Box>
    <Box>6</Box>
    <Box>7</Box>
    <Box>8</Box>
    <Box>9</Box>
    <Box>10</Box>
    <Box>11</Box>
    <Box>12</Box>
  </Grid>
);
