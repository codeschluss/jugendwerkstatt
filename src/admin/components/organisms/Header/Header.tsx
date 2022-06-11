import { FC, ReactElement, useContext } from 'react';
import { BellIcon, LogoutIcon, SearchIcon } from '@heroicons/react/outline';
import I from '../../../../shared/components/ui/IconWrapper';
import DropDown from '../../../../shared/components/ui/DropDown';
import Avatar from '../../../../shared/components/header/sideBar/Avatar';
import { Link, useNavigate } from 'react-router-dom';
import { useGetMeBasicQuery } from '../../../../GraphQl/graphql';
import { Input } from '../../atoms/Form/Input/Input';
import { Button } from '../../atoms/Form/Button/Button';
import { RightDropdownElipse } from '../../atoms/Icons/RightDropdownElipse';
import { LeftDropdownElipse } from '../../atoms/Icons/LeftDropdownElipse';
import { ButtonVariantsEnum } from '../../../interfaces/enums/ButtonVariants.enum';
import AuthContext from '../../../../contexts/AuthContext';

export const Header: FC = (): ReactElement => {
  const user = useGetMeBasicQuery();
  const navigate = useNavigate();
  const { setIsLogedIn } = useContext(AuthContext);

  /**
   * handlers
   */
  const handleLogout = () => {
    localStorage.clear();
    setIsLogedIn(false);
    navigate('/');
  };

  return (
    <header className="dashboard-header">
      <Input
        className="w-80"
        placeholder="Suche..."
        iconRight={<SearchIcon />}
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
                <Link to="/admin/profile">
                  <p className="mt-3 text-lg">Profil Bearbeiten</p>
                </Link>
              </div>
            </div>
            <div className="pb-4 border-b-2 x ">
              <Link to="/admin/profile-password">
                <p>Passwort ändern</p>
              </Link>
            </div>
            <Button
              variant={ButtonVariantsEnum.LINK}
              iconLeft={<LogoutIcon />}
              className="text-black"
              onClick={handleLogout}
            >
              <p>Logout</p>
            </Button>
          </div>
        </DropDown>
        <I className="w-6 h-6 text-white md:text-black md:ml-6">
          <BellIcon />
        </I>
        <Button
          iconOnly
          variant={ButtonVariantsEnum.LINK}
          iconRight={<LogoutIcon className="text-primary" />}
          className="hidden w-6 h-6 text-white md:text-black md:flex md:ml-6"
          onClick={handleLogout}
        />
      </div>
    </header>
  );
};
