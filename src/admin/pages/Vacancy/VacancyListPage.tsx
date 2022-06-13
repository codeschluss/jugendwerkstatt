import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteJobAdMutation,
  useGetJobAdsAdminQuery,
} from "../../../GraphQl/graphql";
import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";
import { formatDate } from "../../utils";

const CreateVacancyPage = (): ReactElement => {
  const navigate = useNavigate();

  const { data: { getJobAds = null } = {}, refetch } = useGetJobAdsAdminQuery();

  const [deleteJobAd] = useDeleteJobAdMutation({
    onCompleted: () => refetch(),
  });

  const handleDeleteById = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Möchten Sie dies löschen?")) {
      deleteJobAd({ variables: { id } });
    }
  };

  const handleUpdateById = (id: string) => () => navigate(id);

  return (
    <Panel.Wrapper
      action={{
        to: "/admin/job-announcements/new",
        label: "Neue Stellenausschreibung erstellen",
      }}
    >
      <CustomTable
        headerData={[
          "Stellenausschreibung",
          "Kategorie",
          "Bewerbungsfrist",
          "Berufsstart",
          "Unternehmen",
          "Aktionen",
        ]}
        bodyData={
          getJobAds?.result?.map((item) => (
            <Table.Row key={item?.id}>
              <Table.Data>{item?.title}</Table.Data>
              <Table.Data>{item?.type?.name}</Table.Data>
              <Table.Data>{formatDate(item?.startDate)}</Table.Data>
              <Table.Data>{formatDate(item?.dueDate)}</Table.Data>
              <Table.Data>{item?.company?.name}</Table.Data>
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

export default CreateVacancyPage;
