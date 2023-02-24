// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'customers',
    path: '/dashboard/customers',
    icon: icon('support_agent_black_24dp'),
  },
  {
    title: 'perfil',
    path: '/dashboard/perfil',
    icon: icon('account_circle_black_24dp'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('manage_accounts_black_24dp'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('login_black_24dp'),
  },
  {
    title: 'register',
    path: '/register',
    icon: icon('note_add_black_24dp'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
