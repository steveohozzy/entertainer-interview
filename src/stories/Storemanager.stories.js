import React from 'react';
import { StoreManager } from './Storemanager'; 

export default {
  title: 'Admin Tools/Store list Manager',
  component: StoreManager,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => <StoreManager />;

export const PrimaryDashboard = Template.bind({});