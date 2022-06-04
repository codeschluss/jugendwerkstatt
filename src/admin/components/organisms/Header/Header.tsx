import { FC, ReactElement } from 'react';
import { BellIcon, LogoutIcon, SearchIcon } from '@heroicons/react/outline';
import I from '../../../../shared/components/ui/IconWrapper';
import { Input } from '../../atoms/Input/Input';
import DropDown from '../../../../shared/components/ui/DropDown';
import Avatar from '../../../../shared/components/header/sideBar/Avatar';
import { Link } from 'react-router-dom';
import { useGetMeBasicQuery } from '../../../../GraphQl/graphql';
import { RightDropdownElipse } from '../../atoms/Icons/RightDropdownElipse';
import { LeftDropdownElipse } from '../../atoms/Icons/LeftDropdownElipse';

export const Header: FC = (): ReactElement => {
  const user = useGetMeBasicQuery();

  return (
    <header className="dashboard-header">
      <Input
        className="w-80"
        placeholder="Suche..."
        iconRight={<SearchIcon className="w-5 h-5" />}
      />

      <div className="flex items-center mr-4">
        <DropDown
          position="right"
          className="relative hidden pr-3 ml-3 mr-3 border-r border-gray-200 md:block"
          boxClassName="w-72 mt-3 py-2.5 px-4 bg-[#FFD000]"
          name={<Avatar size="8" />}
        >
          <LeftDropdownElipse className="absolute top-0 left-0 -z-10" />
          <RightDropdownElipse className="absolute top-0 right-0 -z-10" />

          <div>
            <div className="flex justify-start pb-4 mb-4 border-b-2">
              <Avatar size="10" />
              <div className="flex flex-col justify-around h-20 ml-4">
                <p className="text-lg">{user.data?.me?.fullname}</p>
                <p className="text-xs">{user.data?.me?.email}</p>
                <Link to="profile">
                  <p className="mt-3 text-lg">Profil Bearbeiten</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-around h-24 pb-4 mb-4 border-b-2 ">
              <Link to="/profile-password">
                <p>Passwort ändern</p>
              </Link>
              <p>E-Mail Benachrichtigungen</p>
            </div>
            <div className="flex items-center justify-start">
              {' '}
              <I className="hidden w-8 h-8 text-white md:text-black md:flex">
                <LogoutIcon />
              </I>{' '}
              <p>Logout</p>
            </div>
          </div>
        </DropDown>
        <I className="w-6 h-6 text-white md:text-black md:ml-6">
          <BellIcon />
        </I>
        <I className="hidden w-6 h-6 text-white md:text-black md:flex md:ml-6">
          <LogoutIcon />
        </I>
      </div>
    </header>
  );
};
