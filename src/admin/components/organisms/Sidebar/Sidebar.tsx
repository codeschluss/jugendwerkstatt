import { FC, ReactElement } from "react";
import Nav from "../../molecules/Nav/Nav";
// import { useGetGroupsQuery } from '../../../../GraphQl/graphql';
// import { navItems } from '../../../static/navItems';
import { SidebarProps } from "./Sidebar.props";
import { twClsx } from "../../../utils";

/**
 * @ NOTE: THIS COMPONENT HAS BEEN DEPRECATED
 */

export const Sidebar: FC<SidebarProps> = (): ReactElement => {
  // const { data: { groups = null } = {} } = useGetGroupsQuery();

  // const mappedGroups =
  //   groups?.result?.map((group) => ({
  //     name: group?.name || '',
  //     location: `groups/${group?.id}/view`,
  //     items: group?.courses?.map((course) => ({
  //       name: course?.name,
  //       location: `courses/${course?.id}`,
  //     })),
  //   })) || [];

  return (
    <aside className="dashboard-sidebar">
      <Nav.Wrapper className={twClsx("flex-col justify-between min-h-screen")}>
        <h1>Test</h1>
      </Nav.Wrapper>
    </aside>
  );
};
