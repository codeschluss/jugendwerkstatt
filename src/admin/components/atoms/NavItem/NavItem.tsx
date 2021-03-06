import { FC, useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { BASE_HREF } from '../../../config/global';
import Nav from '../../molecules/Nav/Nav';
import { Icon } from '../Icons';
import { NavItemProps } from './NavItem.props';

export const NavItem: FC<NavItemProps> = ({
  item,
  isSidebarToggled,
  handleSidebarToggler,
  isLastChild,
  children,
  ...rest
}) => {
  /**
   * hooks
   */
  const { pathname } = useLocation();
  const { id } = useParams();

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

  /**
   * handler
   */
  const handleItemDisplayClick = () => {
    setShowItems(!showItems);
    if (!isSidebarToggled) handleSidebarToggler();
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
    <li className={clsx('w-full text-white', !isLastChild && 'mb-8')} {...rest}>
      {hasChild && !shouldNavigate ? (
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
        <NavLink
          end
          to={
            item.noItems ? `${item.location}` : `${BASE_HREF}/${item.location}`
          }
          // className={activeLink ? 'text-charcoal' : ''}
        >
          {item.noItems ? (
            <div className="flex items-center space-x-2">
              {item.icon && <Icon icon={item.icon} />}
              {isSidebarToggled && <span>{item.name}</span>}
            </div>
          ) : (
            item.name
          )}
        </NavLink>
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
