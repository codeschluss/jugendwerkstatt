import { FC } from 'react';
import { NavComposition, NavProps } from './Nav.props';
import { NavItem } from '../../atoms/NavItem/NavItem';
import { NavWrapper } from '../../atoms/NavWrapper/NavWrapper';

const Nav: FC<NavProps> & NavComposition = ({
  data,
  showToggler = true,
  children,
  ...rest
}) => {
  return (
    <ul className="px-5 pt-6" {...rest}>
      {data.items.map((item, idx) => (
        <Nav.Item
          key={item.name}
          item={item}
          isLastChild={idx === data.items.length - 1}
          className="xs:text-black md:text-white"
        />
      ))}
    </ul>
  );
};

Nav.Item = NavItem;
Nav.Wrapper = NavWrapper;

export default Nav;
