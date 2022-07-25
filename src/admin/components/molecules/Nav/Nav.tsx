import { FC } from 'react';
import { NavComposition, NavProps } from './Nav.props';
import { NavItem } from '../../atoms/NavItem/NavItem';
import { NavWrapper } from '../../atoms/NavWrapper/NavWrapper';
import { sidebarStore } from '../../../../store/sidebar/sidebar.store';

const Nav: FC<NavProps> & NavComposition = ({
  data,
  showToggler = true,
  children,
  ...rest
}) => {
  /**
   * store
   */
  const { isToggled, handleToggle } = sidebarStore();

  return (
    <ul className="px-5 pt-6" {...rest}>
      {data.items.map((item, idx) => (
        <Nav.Item
          key={item.name}
          item={item}
          isSidebarToggled={isToggled}
          handleSidebarToggler={handleToggle}
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
