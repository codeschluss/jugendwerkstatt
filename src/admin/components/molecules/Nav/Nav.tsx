import { FC } from 'react';
import { useSidebarStore } from '../../../store/Sidebar.store';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';
import { NavComposition, NavProps } from './Nav.props';
import { NavItem } from '../../atoms/NavItem/NavItem';
import { NavWrapper } from '../../atoms/NavWrapper/NavWrapper';
import { Icon } from '../../atoms';

const Nav: FC<NavProps> & NavComposition = ({
  data,
  showToggler = true,
  children,
  ...rest
}) => {
  /**
   * global state
   */
  const { isSidebarToggled, toggleSidebar } = useSidebarStore();

  /**
   * handlers
   */
  const handleSidebarToggler = () => toggleSidebar();

  return (
    <>
      <ul className="px-5 pt-6" {...rest}>
        {data.items.map((item, idx) => (
          <Nav.Item
            key={item.name}
            item={item}
            isLastChild={idx === data.items.length - 1}
          />
        ))}
      </ul>

      {showToggler && (
        <button
          onClick={handleSidebarToggler}
          className="flex items-center self-end py-4 mx-auto mt-16 space-x-2 text-white"
        >
          {isSidebarToggled && <span>Menü einklappen</span>}
          <Icon
            icon={
              isSidebarToggled ? (
                <ChevronDoubleLeftIcon />
              ) : (
                <ChevronDoubleRightIcon />
              )
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
