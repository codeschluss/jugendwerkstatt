import { FC, useContext, useEffect } from "react";
import Evaluation from "../../client/components/Evaluation";
import Footer from "../../client/components/footer";

import Modal from "../../client/components/modals/courseReviewPopUp";
import PushNotificationsContainer from "../../client/pages/capacitor";
import SideBarContext from "../../contexts/SideBarContext";
import {
  AssignmentEntity,
  FeedbackEntity,
  NotificationType,
  useAddListenerSubscription,
  useFeedbacksQuery,
  useGetMeAssignmentsQuery,
} from "../../GraphQl/graphql";
import { SnackbarTypeEnum } from "../../interfaces/enums/SnackbarType.enum";
import { snackbarStore, useAuthStore } from "../../store";
import { readAuthToken } from "../utils";
import Header from "./header";

export const UserLayout: FC = ({ children }) => {
  const { sideBar } = useContext(SideBarContext);
  const { isAuthenticated } = useAuthStore();

  const { handleOpen } = snackbarStore();

  const feedback = useFeedbacksQuery();
  const assignments = useGetMeAssignmentsQuery();
  const filteredAssignment = assignments.data?.me?.assignments?.filter(
    (assignment: AssignmentEntity | undefined | null) => {
      return assignment?.assignmentState?.name === "ASSIGNED";
    }
  );
  const accessToken = readAuthToken("accessToken");

  const addListener = useAddListenerSubscription({
    skip: !accessToken,
    variables: {
      token: accessToken,
    },
  });
  let data = addListener.data?.addListener;

  // switch (data?.type) {
  //   // case NotificationType.DeletedUser:
  //   //   handleOpen({ type: SnackbarTypeEnum.INFO, message: data.content || "" });
  //   //   break;
  //   case NotificationType.Evaluation:
  //     feedback.refetch();
  //     assignments.refetch();
  //     break;

  // }
  useEffect(() => {
    if (data?.type === "evaluation") {
      feedback.refetch();
      assignments.refetch();
    }
  }, [addListener.data]);

  return (
    <>
      <main
        className={`flex flex-col  min-h-screen transition-all duration-500 ${
          sideBar && isAuthenticated ? "md:pl-60" : "md:pl-20"
        }`}
      >
        {filteredAssignment?.map(
          (assignment: AssignmentEntity | undefined | null) => {
            return (
              <Evaluation
                key={assignment?.id}
                visible={true}
                assignment={assignment}
                refetchParent={() => assignments.refetch()}
              />
            );
          }
        )}

        {feedback?.data?.me?.feedbacks?.map(
          (el: FeedbackEntity | undefined | null) => {
            if (el?.rating === null) {
              return (
                <Modal
                  key={el?.id}
                  id={el?.id}
                  visible={true}
                  course={el?.course?.name}
                  refetchParent={() => feedback.refetch()}
                ></Modal>
              );
            }
          }
        )}
        {isAuthenticated && <Header />}
        <div className="">
          <div>{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};
