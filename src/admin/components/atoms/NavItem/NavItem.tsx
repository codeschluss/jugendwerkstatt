import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { BASE_HREF } from '../../../config/global';
import { useSidebarStore } from '../../../store/Sidebar.store';
import Nav from '../../molecules/Nav/Nav';
import { Icon } from '../Icons';
import { NavItemProps } from './NavItem.props';

export const NavItem: FC<NavItemProps> = ({
  item,
  isLastChild,
  children,
  ...rest
}) => {
  /**
   * local state
   */
  const [showItems, setShowItems] = useState(false);

  /**
   * global state
   */
  const { isSidebarToggled, toggleSidebar } = useSidebarStore();

  /**
   * handler
   */
  const handleItemDisplayClick = () => {
    setShowItems(!showItems);
    if (!isSidebarToggled) toggleSidebar();
  };

  /**
   * constants
   */
  const hasChild = !!item.items;

  return (
    <li className={clsx('w-full text-white', !isLastChild && 'mb-8')} {...rest}>
      {hasChild ? (
        <button
          className="flex items-center justify-between w-full"
          onClick={handleItemDisplayClick}
        >
          <div className="flex items-center space-x-2">
            {item.icon && <Icon icon={item.icon} />}
            {isSidebarToggled && <span>{item.name}</span>}
          </div>
          {isSidebarToggled && item.icon && (
            <Icon icon={showItems ? <ChevronUpIcon /> : <ChevronDownIcon />} />
          )}
        </button>
      ) : (
        <NavLink to={`${BASE_HREF}/${item.location}`}>{item.name}</NavLink>
      )}

      {isSidebarToggled && showItems && hasChild && (
        <div className="flex flex-col ml-2">
          <Nav data={{ items: item.items || [] }} showToggler={false} />
        </div>
      )}
    </li>
  );
};

NavItem.displayName = 'Nav.Item';
