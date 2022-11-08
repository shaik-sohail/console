import React from 'react';
import { SvgIcon } from '@mui/material';
import { ICONS } from '../../../utils/Constants';

export interface IconPropsType {
    name:
      | 'home'
      | 'clientManagement'
      | 'configurations'
      | 'accessManagement'
      | 'orchesstration'
      | 'riskCaseManagement'
      | 'reports';
    [key: string]: unknown;
  }

const Icon = ({ name, ...props }: IconPropsType) => {
  return (
    <SvgIcon {...props}>
      {ICONS[name]}
    </SvgIcon>
  );
};

export default Icon;
