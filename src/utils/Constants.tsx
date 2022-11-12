import {
  CottageOutlined,
  ContentPasteOutlined,
  TuneOutlined,
  Person2Outlined,
  UsbOutlined,
  VerifiedUserOutlined,
  SummarizeOutlined,
} from '@mui/icons-material'

export interface IMenuItems {
  preText?: string
  postText?: string
  id: string
}
export interface CustomSelectProps {
  items: IMenuItems[]
  formSize: 'medium' | 'small'
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

export const NAV_ITEMS = [
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
      { text: 'Roles' },
      { text: 'Users' },
      { text: 'Client Mapping' },
    ],
  },
  {
    icon: 'orchesstration',
    text: 'Orchesstration',
    route: 'orchesstration',
    nestedItems: [
      { text: 'Lists' },
      { text: 'Rules' },
      { text: 'Rules Groups' },
      { text: 'Rules Sets' },
      { text: 'Integration Points' },
      { text: 'Publish' },
      { text: 'Rules - Old' },
      { text: 'Alerts' },
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
