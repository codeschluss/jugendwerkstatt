import { BellIcon, LogoutIcon, SearchIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetMeBasicQuery } from '../../../../GraphQl/graphql';
import useAuth from '../../../../hooks/useAuth';
import detectDevice from '../../../utils/isTouch';
import DropDown from '../../ui/DropDown';
import I from '../../ui/IconWrapper';
import Avatar from '../sideBar/Avatar';
import Search from './Search';

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
  const isTouch = detectDevice();
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);

  const { logout } = useAuth();
  const user = useGetMeBasicQuery();

  return (
    <div className="relative flex items-center justify-end flex-grow">
      <Search
        searchActive={toggleSearch || !isTouch}
        hideSearch={() => setToggleSearch(false)}
      />
      {!toggleSearch && (
        <I
          className="absolute text-white md:text-black right-12 md:hidden"
          onClick={() => setToggleSearch(true)}
        >
          <SearchIcon />
        </I>
      )}

      <DropDown
        position="right"
        className="hidden pr-3 ml-3 mr-3 border-r border-gray-200 md:block"
        boxClassName="w-72 mt-3 py-2.5 px-4"
        name={<Avatar size="8" />}
      >
        <div>
          <div className="flex justify-start pb-4 mb-4 border-b-2">
            <Avatar size="10" />
            <div className="flex flex-col justify-around h-20 ml-4">
              <p className="text-lg">{user.data?.me?.fullname}</p>
              <p className="text-xs">{user.data?.me?.email}</p>
              <Link to="/profile">
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
            <I className="hidden w-8 h-8 text-white cursor-pointer md:text-black md:flex">
              <LogoutIcon onClick={logout} />
            </I>{' '}
            <p onClick={logout} className="cursor-pointer">
              Logout
            </p>
          </div>
        </div>
      </DropDown>
      <I className="w-6 h-6 text-white md:text-black md:ml-6">
        <BellIcon />
      </I>
      <I className="hidden w-6 h-6 text-white cursor-pointer md:text-black md:flex md:ml-6">
        <LogoutIcon onClick={logout} />
      </I>
    </div>
  );
};

export default RightContent;
