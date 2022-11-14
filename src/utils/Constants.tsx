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
