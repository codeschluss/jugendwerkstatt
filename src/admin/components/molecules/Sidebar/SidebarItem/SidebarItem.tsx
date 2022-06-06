import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { twClsx } from '../../../../utils';
import { SidebarItemChildrens } from '../SidebarItemChildrens/SidebarItemChildrens';
import { SidebarItemProps } from './SidebarItem.props';
import { Icon } from '../../../atoms/Icons/Icon';

export const SidebarItem: FC<SidebarItemProps> = ({
  icon,
  item,
  handleSidebarToggler,
  isSidebarOpen = false,
  children,
  ...rest
}) => {
  const { pathname } = useLocation();
  const [isSubNavigationOpen, setIsSubNavigationOpen] = useState(false);

  /**
   * handlers
   */
  const handleSubNavigationOpen = () => {
    setIsSubNavigationOpen(!isSubNavigationOpen);
  };

  const handleIconClick = () => {
    if (!isSidebarOpen && handleSidebarToggler) handleSidebarToggler();
  };

  useEffect(() => {
    if (pathname.includes(item?.href || '')) {
      setIsSubNavigationOpen(true);
    }
  }, [pathname, item]);

  return (
    <>
      <li
        role="button"
        onClick={handleSubNavigationOpen}
        className={twClsx([
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
            <Icon icon={<ChevronUpIcon />} />
          ) : (
            <Icon icon={<ChevronDownIcon />} />
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
