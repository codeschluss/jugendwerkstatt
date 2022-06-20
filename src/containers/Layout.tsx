import { useContext, useEffect, useState } from "react";
import Evaluation from "../client/components/Evaluation";
import Modal from "../client/components/modals/courseReviewPopUp";
import AuthContext from "../contexts/AuthContext";
import FeedbackContext, { FeedbackType } from "../contexts/FeedbackContext";
import SideBarContext from "../contexts/SideBarContext";
import TokenStorageContext from "../contexts/TokenStorageContext";
import {
  FeedbackEntity,
  NotificationType,
  useAddListenerSubscription,
  useFeedbacksQuery,
} from "../GraphQl/graphql";
import useAuth from "../hooks/useAuth";
import Feedback from "../shared/components/feedback/Feedback";
import Header from "../shared/components/header";

const Layout: React.FC = ({ children }) => {
  const { sideBar } = useContext(SideBarContext);
  const { isLogedIn } = useContext(AuthContext);
  const { setFeedback } = useContext(FeedbackContext);
  const { accessToken } = useContext(TokenStorageContext);
  const { init } = useAuth();

  useEffect(() => {
    init();
  }, []);

  const feedback = useFeedbacksQuery();

  const addListener = useAddListenerSubscription({
    skip: !accessToken,
    variables: {
      token: accessToken,
    },
  });
  let data = addListener.data?.addListener;
  switch (data?.type) {
    case NotificationType.DeletedUser:
      setFeedback({
        type: FeedbackType.Info,
        message: data.content,
      });
      break;
    case NotificationType.Evaluation:
      feedback.refetch();
  }
  console.log(feedback.data?.me?.feedbacks, "feedbacks");

  return (
    <main
      className={`flex flex-col  min-h-screen transition-all duration-500 ${
        sideBar && isLogedIn ? "md:pl-60" : "md:pl-20"
      }`}
    >
      <Feedback />
      <Evaluation visible={true} />
      {feedback?.data?.me?.feedbacks?.map(
        (el: FeedbackEntity | undefined | null) => {
          if (el?.rating === null) {
            return (
              <Modal
                id={el?.id}
                visible={true}
                course={el?.course?.name}
                refetchParent={() => feedback.refetch()}
              ></Modal>
            );
          }
        }
      )}
      {isLogedIn && <Header />}
      <div className="md:p-12">
        <div>{children}</div>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
