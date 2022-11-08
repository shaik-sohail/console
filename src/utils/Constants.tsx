import {
  CottageOutlined,
  ContentPasteOutlined,
  TuneOutlined,
  Person2Outlined,
  UsbOutlined,
  VerifiedUserOutlined,
  SummarizeOutlined,
} from '@mui/icons-material'

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
  },
  {
    icon: 'clientManagement',
    text: 'Client Management',
    route: 'clientManagement',
  },
  {
    icon: 'configurations',
    text: 'Configurations',
    route: 'configurations',
  },
  {
    icon: 'accessManagement',
    text: 'Access Management',
    route: 'accessManagement',
  },
  {
    icon: 'orchesstration',
    text: 'Orchesstration',
    route: 'orchesstration',
  },
  {
    icon: 'riskCaseManagement',
    text: 'Risk Case Management',
    route: 'riskCaseManagement',
  },
  {
    icon: 'reports',
    text: 'Reports',
    route: 'reports',
  },
]
