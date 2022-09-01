import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/outline";
import dayjs from "dayjs";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteAssignmentMutation,
  useGetAssignmentsQuery,
} from "../../../GraphQl/graphql";
import { Table, Action, Panel, Icon } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const EvaluationsAssignmentPage = (): ReactElement => {
  const navigate = useNavigate();
  const { data: { assignments = null } = {}, refetch } = useGetAssignmentsQuery(
    {
      fetchPolicy: "cache-and-network",
    }
  );
  const [deleteAssignment] = useDeleteAssignmentMutation({
    onCompleted: () => refetch(),
  });

  const handleQuestionnaireUpdate = (id: string) => () => navigate(id);
  const handleQuestionnaireDelete = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Möchten Sie dies löschen?"))
      deleteAssignment({ variables: { id } });
  };

  return (
    <Panel.Wrapper
      action={{
        to: "/admin/evaluations/assignments/new",
        label: "Zuordnungen hinzufügen",
      }}
    >
      <CustomTable
        headerData={[
          "Benutzer/in",
          "Evaluierungsbogen",
          "Ausgegeben am",
          "Status",
          "Aktionen",
        ]}
        bodyData={
          assignments?.result?.map((assignment) => (
            <Table.Row key={assignment?.id}>
              <Table.Data>{assignment?.user?.fullname}</Table.Data>
              <Table.Data>{assignment?.questionnaire?.name || "/"}</Table.Data>
              <Table.Data>
                {dayjs(assignment?.created).format("DD.MM.YYYY")}
              </Table.Data>
              <Table.Data>
                <div className="flex flex-row items-center justify-center">
                  {assignment?.assignmentState?.name === "ASSIGNED" ? (
                    <Icon icon={<ExclamationCircleIcon />} />
                  ) : (
                    <Icon icon={<CheckIcon className="text-green-500" />} />
                  )}
                </div>
              </Table.Data>
              <Table.Data>
                <div className="flex flex-row items-center justify-center space-x-2">
                  <Action
                    onUpdate={handleQuestionnaireUpdate(assignment?.id || "")}
                  />
                  <Action
                    onDelete={handleQuestionnaireDelete(assignment?.id || "")}
                  />
                </div>
              </Table.Data>
            </Table.Row>
          )) || []
        }
      />
    </Panel.Wrapper>
  );
};

export default EvaluationsAssignmentPage;
