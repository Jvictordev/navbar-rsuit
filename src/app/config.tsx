import DashboardIcon from '@rsuite/icons/Dashboard'

export const appNavs = [
  {
    eventKey: 'dashboard',
    icon: <DashboardIcon />,
    title: 'Dashboard',
    to: '/',
  },
  {
    eventKey: 'authentication',
    title: 'Authentication',
    icon: <DashboardIcon />,
    children: [
      {
        eventKey: 'sign-in',
        title: 'Sign In',
        to: '/',
      },

      {
        eventKey: 'sign-up',
        title: 'Sign Up',
        to: '/',
      },
    ],
  },
]
