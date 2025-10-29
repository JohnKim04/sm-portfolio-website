// components/NavItem.tsx

import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavItemProps {
  href: string;
  label: string;
  bgColor: string;
  textColor: string;
  newTab?: boolean;
  customSpacing?: string;
}

export default function NavItem({
  href,
  label,
  bgColor,
  textColor,
  newTab,
  customSpacing = '',
}: NavItemProps) {
  const isSelected = bgColor !== '';
  const roundedClass = isSelected ? 'rounded-full' : 'rounded-xl';

  if (newTab) {
    return (
      <li className={`relative flex items-center py-2 px-6 pl-0 h-[48px] ${roundedClass} text-[18px] ${customSpacing}`}>
        {isSelected && (
          <motion.div
            layoutId="activeNavBg"
            className={`absolute inset-0 ${bgColor} ${roundedClass}`}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
        <a href={href} target="_blank" className={`relative z-10 ${textColor}`}>
          {label}
        </a>
      </li>
    );
  } else {
    return (
      <li className={`relative flex items-center py-2 px-6 h-[48px] ${roundedClass} text-[18px] ${customSpacing}`}>
        {isSelected && (
          <motion.div
            layoutId="activeNavBg"
            className={`absolute inset-0 ${bgColor} ${roundedClass}`}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
        <Link href={href} className={`relative z-10 ${textColor}`}>
          {label}
        </Link>
      </li>
    );
  }
}
