import { FC, useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { BASE_HREF } from '../../../config/global';
import Nav from '../../molecules/Nav/Nav';
import { Icon } from '../Icons';
import { NavItemProps } from './NavItem.props';
import { twClsx } from '../../../utils';
import SideBarContext from '../../../../contexts/SideBarContext';
import { sidebarStore } from '../../../../store/sidebar/sidebar.store';

export const NavItem: FC<NavItemProps> = ({
  item,
  isLastChild,
  children,
  className,
  ...rest
}) => {
  /**
   * hooks
   */
  const { sideBar, setSideBar } = useContext(SideBarContext);
  const { isToggled: isSidebarToggled, handleToggle: handleSidebarToggler } =
    sidebarStore();
  const { pathname } = useLocation();
  // const { id } = useParams();

  /**
   * local state
   */
  const [showItems, setShowItems] = useState(false);

  /**
   * effects
   */
  useEffect(() => {
    if (pathname.includes(`${BASE_HREF}/${item.location}`)) setShowItems(true);
  }, [item.location, pathname]);

  useEffect(() => {
    if (!sideBar) setShowItems(false);
  }, [sideBar]);

  /**
   * handler
   */
  const handleItemDisplayClick = () => {
    setShowItems(!showItems);

    if (!isSidebarToggled) {
      handleSidebarToggler();
      setSideBar(!sideBar);
    }
  };

  /**
   * constants
   */
  const hasChild = !!item.items;
  const shouldNavigate = item.location;
  // const paramIndex = pathname.split('/').findIndex((item) => item === id);
  // const activeLink =
  //   pathname
  //     .split('/')
  //     .filter((item) =>
  //       id && paramIndex === pathname.split('/').length - 1
  //         ? item !== id
  //         : item !== 'new'
  //     )
  //     .join('/') === `${BASE_HREF}/${item.location}`;

  return (
    <li
      className={clsx('w-full text-white', !isLastChild && 'mb-8', className)}
      {...rest}
    >
      {hasChild && !shouldNavigate ? (
        <button
          className={twClsx(
            'flex items-center justify-between w-full',
            !isSidebarToggled && 'justify-end pr-2'
          )}
          onClick={handleItemDisplayClick}
        >
          <div className="flex items-center space-x-2">
            {item.icon && <Icon icon={item.icon} />}
            {isSidebarToggled && <span>{item.name}</span>}
          </div>
          {item.icon && isSidebarToggled && (
            <Icon icon={showItems ? <ChevronUpIcon /> : <ChevronDownIcon />} />
          )}
        </button>
      ) : (
        <NavLink
          end
          to={
            item.noItems ? `${item.location}` : `${BASE_HREF}/${item.location}`
          }
          // className={activeLink ? 'text-charcoal' : ''}
        >
          {item.noItems ? (
            <div
              className={twClsx(
                'flex items-center space-x-2',
                !isSidebarToggled && 'justify-end pr-2'
              )}
            >
              {item.icon && <Icon icon={item.icon} />}
              {isSidebarToggled && <span>{item.name}</span>}
            </div>
          ) : (
            item.name
          )}
        </NavLink>
      )}

      {showItems && hasChild && (
        <div className="flex flex-col ml-2">
          <Nav data={{ items: item.items || [] }} showToggler={false} />
        </div>
      )}
    </li>
  );
};

NavItem.displayName = 'Nav.Item';
