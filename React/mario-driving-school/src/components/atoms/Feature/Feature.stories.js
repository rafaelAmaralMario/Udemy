import React from 'react';
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from 'react-icons/fa';

import Feature from './Feature';
import Grid from 'components/atoms/Grid/Grid';

export default {
  title: 'Components|Atoms/Feature',
  component: Feature,
};

export const usage = () => (
  <Feature icon={<FaCar />} title='New Feature'>
    <p>This is A description about the new feature.</p>
  </Feature>
);

export const withGrid = () => (
  <Grid sm={2} md={4}>
    <Feature icon={<FaCar />} title='The biggest and best fleet'>
      <p>This is A description about the new feature.</p>

    </Feature>

    <Feature icon={<FaKey />} title='Quicker driver license'>
      <p>This is A description about the new feature.</p>
    </Feature>

    <Feature icon={<FaMapMarkedAlt />} title='Well localized'>
      <p>This is A description about the new feature.</p>
    </Feature>

    <Feature icon={<FaAccessibleIcon />} title='Accessibility'>
      <p>This is A description about the new feature.</p>
    </Feature>
  </Grid>

);
