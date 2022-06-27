import { FC, ReactElement } from 'react';
import { useGetGroupsQuery } from '../../../../GraphQl/graphql';
import { navItems } from '../../../static/navItems';
import Nav from '../../molecules/Nav/Nav';
import { SidebarProps } from './Sidebar.props';

export const Sidebar: FC<SidebarProps> = (): ReactElement => {
  const { data: { groups = null } = {} } = useGetGroupsQuery();

  const mappedGroups =
    groups?.result?.map((group) => ({
      name: group?.name || '',
      location: `groups/${group?.id || ''}/members`,
    })) || [];

  return (
    <aside className="dashboard-sidebar">
      <Nav.Wrapper className="flex flex-col justify-between min-h-screen">
        <Nav data={navItems(mappedGroups)} />
      </Nav.Wrapper>
    </aside>
  );
};
