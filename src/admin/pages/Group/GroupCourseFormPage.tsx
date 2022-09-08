import { ReactElement, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { Accordion, FormActions, InputField } from "../../components/molecules";
import { GroupCourseFormSchema } from "../../validations/GroupForm.schema";
import {
  useGetCourseQuery,
  useGetGroupsQuery,
  useSaveCourseMutation,
} from "../../../GraphQl/graphql";
import { Select } from "../../components/atoms";
import { DescriptionFrom } from "../../components/organisms";
import { twClsx } from "../../utils";
import { GroupCourseFormInputs } from "./GroupForm.props";
import ForceRefetchContext from "../../../contexts/ForceRefetchContext";

const GroupCourseFormPage = (): ReactElement => {
  const navigate = useNavigate();
  const { id, courseId } = useParams();
  const { reRender, setReRender } = useContext(ForceRefetchContext);
  const methods = useForm<GroupCourseFormInputs>({
    mode: "onChange",
    resolver: joiResolver(GroupCourseFormSchema),
  });
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { data: { groups = null } = {} } = useGetGroupsQuery();
  const { data: { course = null } = {} } = useGetCourseQuery({
    variables: { id: courseId },
    skip: !courseId,
  });

  const [saveCourse] = useSaveCourseMutation({
    onCompleted: () => {
      navigate("/admin/groups");
      setReRender(!reRender);
    },
  });

  useEffect(() => {
    if (id && course) {
      reset({
        name: course.name || "",
        group: course.group?.id || "",
        description: course.description || "",
      });
    }
  }, [id, course, reset]);

  const onSubmit = ({ name, group, description }: GroupCourseFormInputs) => {
    saveCourse({
      variables: {
        entity: {
          ...(courseId && { id: courseId }),
          name,
          group: { id: group },
          description,
        },
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <form className="max-w-6xl">
        <Accordion
          title="Stammdaten"
          open={!!courseId}
          className={twClsx(errors.name && "border border-primary")}
        >
          <InputField
            id="name"
            label="Kursname"
            {...register("name")}
            error={errors.name?.message}
            className="mb-4"
          />
          <Select
            id="group"
            label="Gruppe"
            {...register("group")}
            error={errors.group?.message}
          >
            {!course && <option value="">Wählen Sie eine Gruppe</option>}
            {groups?.result?.map((group) => (
              <option key={group?.id} value={group?.id || ""}>
                {group?.name}
              </option>
            ))}
          </Select>
        </Accordion>

        <Accordion
          title="Beschreibung"
          className={twClsx(errors.description && "border border-primary")}
        >
          <DescriptionFrom />
        </Accordion>

        <FormActions onSubmit={handleSubmit(onSubmit)} />
      </form>
    </FormProvider>
  );
};

export default GroupCourseFormPage;
