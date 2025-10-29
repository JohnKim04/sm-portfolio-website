'use client';

import { usePathname } from 'next/navigation';
import NavItem from './NavItem';
import { useDisplayNav } from '../../_hooks/useDisplayNav';
import { useDarkModeSwitch } from '../../_hooks/useDarkModeSwitch';

export default function Navbar() {
  const pathname = usePathname();
  const darkMode = useDarkModeSwitch();

  const bgColor = 'bg-black';

  // On about page, always use white text for About nav item
  const bgAboutText = pathname === '/about' ? bgColor : '';
  const bgAboutTextColor = pathname === '/about' ? 'text-white' : 'text-black';

  const bgWorkText =
    pathname === '/' ||
    pathname === '/hackdavis' ||
    pathname === '/sage' ||
    pathname === '/paramount/EPG' ||
    pathname === '/paramount/errorMessaging' ||
    pathname === '/reddit' ||
    pathname === '/coinbase'
      ? bgColor
      : '';

  const bgWorkTextColor =
    pathname === '/' ||
    pathname === '/hackdavis' ||
    pathname === '/sage' ||
    pathname === '/paramount/EPG' ||
    pathname === '/paramount/errorMessaging' ||
    pathname === '/reddit' ||
    pathname === '/coinbase'
      ? 'text-white'
      : pathname === '/about' && darkMode
      ? 'text-white'
      : 'text-black';

  const bgPlayText = pathname === '/play' ? bgColor : '';
  const bgPlayTexColor = pathname === '/play' ? 'text-white' : pathname === '/about' && darkMode ? 'text-white' : 'text-black';

  const invisible = pathname === '/login';

  const isVisible = useDisplayNav();

  const navItems = [
    {
      href: '/',
      label: 'Work',
      bgColor: bgWorkText,
      textColor: bgWorkTextColor,
    },
    {
      href: '/about',
      label: 'About',
      bgColor: bgAboutText,
      textColor: bgAboutTextColor,
    },
    {
      href: 'https://drive.google.com/file/d/1iWHeb_M7NPPgxQrANJpO_P6_7xIW5EB-/view',
      label: 'Resume',
      bgColor: bgPlayText,
      newTab: true,
      textColor: bgPlayTexColor,
    },
  ];

  return !invisible ? (
    <header
      className={`fixed top-0 z-50 flex w-full justify-center bg-transparent pt-6 transition-all duration-300  ${isVisible ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-full'}`}
    >
      <nav
        className={`flex items-center justify-center w-fit bg-white/40 backdrop-blur-[32px] border border-white/20 ${pathname === '/about' && darkMode ? 'text-white' : 'text-black'} rounded-full font-dm-sans shadow-navbar`}
      >
        <ul className="flex items-center gap-6 p-2 h-[64px] font-dm-sans text-xl leading-none">
          {navItems.map((item, index) => (
            <NavItem key={item.href} {...item} customSpacing={index === 0 ? '-mr-3' : ''} />
          ))}
        </ul>
      </nav>
    </header>
  ) : null;
}
