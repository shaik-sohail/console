import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import UsbOutlinedIcon from '@mui/icons-material/UsbOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined'

export interface IconType {
  [key: string]: JSX.Element
}
export const ICONS: IconType = {
  home: <CottageOutlinedIcon />,
  clientManagement: <ContentPasteOutlinedIcon />,
  configurations: <TuneOutlinedIcon />,
  accessManagement: <Person2OutlinedIcon />,
  orchesstration: <UsbOutlinedIcon />,
  riskCaseManagement: <VerifiedUserOutlinedIcon />,
  reports: <SummarizeOutlinedIcon />,
}

export const NAV_ITEMS = [
  { icon: 'home', text: 'Home' },
  {
    icon: 'clientManagement',
    text: 'Client Management',
  },
  {
    icon: 'configurations',
    text: 'Configurations',
  },
  {
    icon: 'accessManagement',
    text: 'Access Management',
  },
  {
    icon: 'orchesstration',
    text: 'Orchesstration',
  },
  {
    icon: 'riskCaseManagement',
    text: 'Risk Case Management',
  },
  {
    icon: 'reports',
    text: 'Reports',
  },
]
