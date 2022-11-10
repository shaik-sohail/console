import {
  CottageOutlined,
  ContentPasteOutlined,
  TuneOutlined,
  Person2Outlined,
  UsbOutlined,
  VerifiedUserOutlined,
  SummarizeOutlined,
} from '@mui/icons-material'
import { column } from '../components/organisms/OrchestrationTable'

export interface IMenuItems {
  preText?: string
  postText?: string
  id: string
}
export interface CustomSelectProps {
  items: IMenuItems[]
  formSize?: 'medium' | 'small'
}

export interface IconType {
  [key: string]: JSX.Element
}
export const ICONS: IconType = {
  home: <CottageOutlined />,
  clientManagement: <ContentPasteOutlined />,
  configurations: <TuneOutlined />,
  accessManagement: <Person2Outlined />,
  orchesstration: <UsbOutlined />,
  riskCaseManagement: <VerifiedUserOutlined />,
  reports: <SummarizeOutlined />,
}

export interface NavItemsType {
  icon?: string
  text: string
  route: string
  nestedItems?: NavItemsType[]
}

export const MenuItems = [{ id: '1', preText: 'sohail', postText: 'softility' }]

export const NAV_ITEMS: NavItemsType[] = [
  {
    icon: 'home',
    text: 'Home',
    route: 'home',
    nestedItems: [],
  },
  {
    icon: 'clientManagement',
    text: 'Client Management',
    route: 'clientManagement',
    nestedItems: [],
  },
  {
    icon: 'configurations',
    text: 'Configurations',
    route: 'configurations',
    nestedItems: [],
  },
  {
    icon: 'accessManagement',
    text: 'Access Management',
    route: 'accessManagement',
    nestedItems: [
      { text: 'Roles', route: 'roles' },
      { text: 'Users', route: 'users' },
      { text: 'Client Mapping', route: 'clientMapping' },
    ],
  },
  {
    icon: 'orchesstration',
    text: 'Orchesstration',
    route: 'orchesstration',
    nestedItems: [
      { text: 'Lists', route: 'lists' },
      { text: 'Rules', route: 'rules' },
      { text: 'Rules Groups', route: 'rulesGroups' },
      { text: 'Rules Sets', route: 'rulesSets' },
      { text: 'Integration Points', route: 'integrationPoints' },
      { text: 'Publish', route: 'publish' },
      { text: 'Rules - Old', route: 'rulesOld' },
      { text: 'Alerts', route: 'alerts' },
    ],
  },
  {
    icon: 'riskCaseManagement',
    text: 'Risk Case Management',
    route: 'riskCaseManagement',
    nestedItems: [],
  },
  {
    icon: 'reports',
    text: 'Reports',
    route: 'reports',
    nestedItems: [],
  },
]

export const TRANSUNION_LLC = '©TransUnion LLC.All Rights Reserved.'

export const HEADER_NAMES : [string] = ['Id', 'Description']

export const TABLE_DATA_RESULT = [
  {
    _id: 'ResetPassword',
    _rev: '-1631248348',
    description: 'Reset Password Tree',
  },
  {
    _id: 'Registration',
    _rev: '-1380595050',
    description: 'Platform Registration Tree',
  },
  {
    _id: 'ProgressiveProfile',
    _rev: '-672542169',
    description: 'Prompt for missing preferences on 3rd login',
  },
  {
    _id: 'ForgottenUsername',
    _rev: '459280293',
    description: 'Forgotten Username Tree',
  },
  {
    _id: 'UpdatePassword',
    _rev: '2098323263',
    description: 'Update password using active session',
  },
  {
    _id: 'Login',
    _rev: '368087022',
    description: 'Platform Login Tree',
  },
]
export const TABLE_DATA_HEADERS: column[] = [
  { id: 1, value: '', type: 'checkbox', alignText: 'center' },
  {
    id: 2,
    value: 'Journey Name',
    type: 'sort',
    alignText: 'center',
  },
  {
    id: 3,
    value: 'Description',
    type: 'text',
    alignText: 'center',
  },
  { id: 4, value: 'Group', type: 'sort', alignText: 'center' },
  { id: 5, value: 'Status', type: 'sort', alignText: 'center' },
]

export const TABLE_ROWS_DATA = [
  {
    id: 1,
    isRowSelected: false,
    values: [
      {
        type: 'checkbox',
        // isChecked: false,
      },
      {
        type: 'text',
        value: 'Data Desicion',
        alignText: 'left',
      },
      {
        type: 'text',
        value:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        alignText: 'left',
      },
      {
        type: 'text',
        value: 'Group 1',
        alignText: 'center',
      },
      {
        type: 'text',
        value: 'Active',
        alignText: 'center',
      },
    ],
  },
  {
    id: 2,
    isRowSelected: false,

    values: [
      {
        type: 'checkbox',
        // isChecked: false,
      },
      {
        type: 'text',
        value: 'Data Desicion',
        alignText: 'left',
      },
      {
        type: 'text',
        value:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        alignText: 'left',
      },
      {
        type: 'text',
        value: 'Group 1',
        alignText: 'center',
      },
      {
        type: 'text',
        value: 'Active',
        alignText: 'center',
      },
    ],
  },
  {
    id: 3,
    isRowSelected: false,

    values: [
      {
        type: 'checkbox',
        // isChecked: false,
      },
      {
        type: 'text',
        value: 'Data Desicion',
        alignText: 'left',
      },
      {
        type: 'text',
        value:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        alignText: 'left',
      },
      {
        type: 'text',
        value: 'Group 1',
        alignText: 'center',
      },
      {
        type: 'text',
        value: 'Active',
        alignText: 'center',
      },
    ],
  },
  {
    id: 4,
    isRowSelected: false,

    values: [
      {
        type: 'checkbox',
        // isChecked: false,
      },
      {
        type: 'text',
        value: 'Data Desicion',
        alignText: 'left',
      },
      {
        type: 'text',
        value:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        alignText: 'left',
      },
      {
        type: 'text',
        value: 'Group 1',
        alignText: 'center',
      },
      {
        type: 'text',
        value: 'Active',
        alignText: 'center',
      },
    ],
  },
  {
    id: 5,
    isRowSelected: false,

    values: [
      {
        type: 'checkbox',
        // isChecked: false,
      },
      {
        type: 'text',
        value: 'Data Desicion',
        alignText: 'left',
      },
      {
        type: 'text',
        value:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        alignText: 'left',
      },
      {
        type: 'text',
        value: 'Group 1',
        alignText: 'center',
      },
      {
        type: 'text',
        value: 'Active',
        alignText: 'center',
      },
    ],
  },
  {
    id: 6,
    isRowSelected: false,

    values: [
      {
        type: 'checkbox',
        // isChecked: false,
      },
      {
        type: 'text',
        value: 'Data Desicion',
        alignText: 'left',
      },
      {
        type: 'text',
        value:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        alignText: 'left',
      },
      {
        type: 'text',
        value: 'Group 1',
        alignText: 'center',
      },
      {
        type: 'text',
        value: 'Active',
        alignText: 'center',
      },
    ],
  },
  {
    id: 7,
    isRowSelected: false,

    values: [
      {
        type: 'checkbox',
        // isChecked: false,
      },
      {
        type: 'text',
        value: 'Data Desicion',
        alignText: 'left',
      },
      {
        type: 'text',
        value:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        alignText: 'left',
      },
      {
        type: 'text',
        value: 'Group 1',
        alignText: 'center',
      },
      {
        type: 'text',
        value: 'Active',
        alignText: 'center',
      },
    ],
  },
  {
    id: 8,
    isRowSelected: false,

    values: [
      {
        type: 'checkbox',
        // isChecked: false,
      },
      {
        type: 'text',
        value: 'Data',
        alignText: 'left',
      },
      {
        type: 'text',
        value:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        alignText: 'left',
      },
      {
        type: 'text',
        value: 'Group 1',
        alignText: 'center',
      },
      {
        type: 'text',
        value: 'Active',
        alignText: 'center',
      },
    ],
  },
  {
    id: 9,
    isRowSelected: false,

    values: [
      {
        type: 'checkbox',
        // isChecked: false        // isChecked: false,
      },
      {
        type: 'text',
        value: 'Data',
        alignText: 'left',
      },
      {
        type: 'text',
        value:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        alignText: 'left',
      },
      {
        type: 'text',
        value: 'Group 1',
        alignText: 'center',
      },
      {
        type: 'text',
        value: 'Active',
        alignText: 'center',
      },
    ],
  },
  {
    id: 10,
    isRowSelected: false,

    values: [
      {
        type: 'checkbox',
        // isChecked: false,
      },
      {
        type: 'text',
        value: 'Data Breach',
        alignText: 'left',
      },
      {
        type: 'text',
        value:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        alignText: 'left',
      },
      {
        type: 'text',
        value: 'Group 2',
        alignText: 'center',
      },
      {
        type: 'text',
        value: 'Active',
        alignText: 'center',
      },
    ],
  },
]
