import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import {
  useDeleteLinkMutation,
  useGetLinksQuery,
} from "../../../GraphQl/graphql";
import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const MediaListPage = (): ReactElement => {
  const navigate = useNavigate();

  const { data: { getLinks = null } = {}, refetch } = useGetLinksQuery({
    fetchPolicy: "cache-and-network",
  });

  const [deleteLink] = useDeleteLinkMutation({
    onCompleted: () => refetch(),
  });

  const handleDeleteById = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Möchten Sie dies löschen?")) {
      deleteLink({ variables: { id } });
    }
  };

  const handleUpdateById = (id: string) => () => navigate(id);

  return (
    <Panel.Wrapper
      action={{ to: "/admin/medias/new", label: "Neues Video hinzufügen" }}
    >
      <CustomTable
        headerData={["Videoname", "Kategorie", "Link", "Aktionen"]}
        bodyData={
          getLinks?.result?.map((item) => (
            <Table.Row key={item?.id}>
              <Table.Data>{item?.title}</Table.Data>
              <Table.Data>{item?.category?.name}</Table.Data>
              <Table.Data title={item?.url || ""}>{item?.url}</Table.Data>
              <Table.Data>
                <Action
                  onUpdate={handleUpdateById(item?.id || "")}
                  onDelete={handleDeleteById(item?.id || "")}
                />
              </Table.Data>
            </Table.Row>
          )) || []
        }
      />
    </Panel.Wrapper>
  );
};

export default MediaListPage;
