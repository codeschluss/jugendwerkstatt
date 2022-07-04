import { FC } from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';
import { NavComposition, NavProps } from './Nav.props';
import { NavItem } from '../../atoms/NavItem/NavItem';
import { NavWrapper } from '../../atoms/NavWrapper/NavWrapper';
import { Icon } from '../../atoms';
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
    <>
      <ul className="px-5 pt-6" {...rest}>
        {data.items.map((item, idx) => (
          <Nav.Item
            key={item.name}
            item={item}
            isSidebarToggled={isToggled}
            handleSidebarToggler={handleToggle}
            isLastChild={idx === data.items.length - 1}
          />
        ))}
      </ul>

      {showToggler && (
        <button
          onClick={handleToggle}
          className="flex items-center self-end py-4 mx-auto mt-16 space-x-2 text-white"
        >
          {isToggled && <span>Menü einklappen</span>}
          <Icon
            icon={
              isToggled ? <ChevronDoubleLeftIcon /> : <ChevronDoubleRightIcon />
            }
          />
        </button>
      )}
    </>
  );
};

Nav.Item = NavItem;
Nav.Wrapper = NavWrapper;

export default Nav;
