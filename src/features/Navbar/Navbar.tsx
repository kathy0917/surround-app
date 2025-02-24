import { Link } from 'react-router-dom';
import * as S from './styles';
import { IoHomeSharp } from 'react-icons/io5';
import { BiSolidCategory } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';

interface NavItem {
  url: string;
  icon: React.ComponentType;
  label: string;
  left: string;
}

const navItem: NavItem[] = [
  { url: '/category', icon: BiSolidCategory as any, label: 'Category', left: '-12px' },
  { url: '/', icon: IoHomeSharp as any, label: 'Home', left: '-3px' },
  { url: '/my', icon: FaUserCircle as any, label: 'My', left: '4px' },
];

export default function Navbar() {
  return (
    <S.Nav>
      <S.NavList>
        {navItem.map((item, idx) => (
          <S.Container key={idx}>
            <Link to={item.url}>
              <S.Icon as={item.icon} />
              <S.Span left={item.left}>{item.label}</S.Span>
            </Link>
          </S.Container>
        ))}
      </S.NavList>
    </S.Nav>
  );
}
