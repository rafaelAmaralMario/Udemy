import React from "react";
import { actions } from "@storybook/addon-actions";
import styled from 'styled-components';


import Button from './Button';

export default {
  title: "Components|Atoms/Button",
  component: Button,
};

const ev = actions({ onClick: "Clicked" })

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`

export const Default = () => (
  <>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...ev} > Default </Button>
      <Button {...ev} color="primary"> Primary </Button>
      <Button {...ev} color="danger"> Danger </Button>
    </Toolbar>

    <p>Disabled</p>
    <Toolbar>
      <Button disabled {...ev} > Default </Button>
      <Button disabled {...ev} color="primary"> Primary </Button>
      <Button disabled {...ev} color="danger"> Danger </Button>
    </Toolbar>
  </>
);

export const Outlined = () => (
  <>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant="outlined" {...ev} > Default </Button>
      <Button variant="outlined" {...ev} color="primary"> Primary </Button>
      <Button variant="outlined" {...ev} color="danger"> Danger </Button>
    </Toolbar>

    <p>Disabled</p>
    <Toolbar>
      <Button variant="outlined" disabled {...ev} > Default </Button>
      <Button variant="outlined" disabled {...ev} color="primary"> Primary </Button>
      <Button variant="outlined" disabled {...ev} color="danger"> Danger </Button>
    </Toolbar>
  </>
);

export const Link = () => (
  <>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant="link" {...ev} > Default </Button>
      <Button variant="link" {...ev} color="primary"> Primary </Button>
      <Button variant="link" {...ev} color="danger"> Danger </Button>
    </Toolbar>

    <p>Disabled</p>
    <Toolbar>
      <Button variant="link" disabled {...ev} > Default </Button>
      <Button variant="link" disabled {...ev} color="primary"> Primary </Button>
      <Button variant="link" disabled {...ev} color="danger"> Danger </Button>
    </Toolbar>
  </>
);



