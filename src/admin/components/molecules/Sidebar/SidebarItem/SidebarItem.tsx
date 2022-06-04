import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cx } from '../../../../../shared/utils/ClassNames';
import { SidebarItemChildrens } from '../SidebarItemChildrens/SidebarItemChildrens';
import { SidebarItemProps } from './SidebarItem.props';

export const SidebarItem: FC<SidebarItemProps> = ({
  icon,
  item,
  handleSidebarToggler,
  isSidebarOpen = false,
  children,
  ...rest
}) => {
  const [isSubNavigationOpen, setIsSubNavigationOpen] = useState(false);

  /**
   * handlers
   */
  const handleSubNavigationOpen = () =>
    setIsSubNavigationOpen(!isSubNavigationOpen);
  const handleIconClick = () => {
    if (!isSidebarOpen && handleSidebarToggler) handleSidebarToggler();
  };

  return (
    <>
      <li
        role="button"
        onClick={handleSubNavigationOpen}
        className={cx([
          'flex items-center mb-8 text-white',
          isSidebarOpen && 'gap-x-3',
        ])}
        {...rest}
      >
        <button onClick={handleIconClick} className="w-5 h-5">
          {icon}
        </button>
        <span className="flex-1">{children}</span>
        {isSidebarOpen ? (
          isSubNavigationOpen ? (
            <ChevronUpIcon className="w-5 h-5" />
          ) : (
            <ChevronDownIcon className="w-5 h-5" />
          )
        ) : null}
      </li>

      <SidebarItemChildrens
        items={item?.childrens || []}
        baseUrl={`/admin/${item?.href}`}
        show={
          isSidebarOpen && isSubNavigationOpen && item?.childrens?.length !== 0
        }
        className="ml-[33px]"
      />
    </>
  );
};

SidebarItem.displayName = 'Sidebar.Item';
