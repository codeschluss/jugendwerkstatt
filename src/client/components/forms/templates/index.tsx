import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  TemplateEntity,
  useGetMeBasicQuery,
  useGetMeUserTemplatesQuery,
  useGetTemplatesQuery, UserTemplateEntity
} from "../../../../GraphQl/graphql";
import I from "../../../../shared/components/ui/IconWrapper";

const Templates: React.FC = () => {
  const location = useLocation();
  const { templateType }: any = location.state;
  const user = useGetMeBasicQuery();
  const templatesResult = useGetTemplatesQuery({
    variables: {
      id: templateType.id,
    },
    fetchPolicy: "network-only",
  });

  const fetchedTemplates: [TemplateEntity] = templatesResult.data?.getTemplates
    ?.result as [TemplateEntity];

  const userTemplatesResult = useGetMeUserTemplatesQuery({
    fetchPolicy: "network-only"
  });

  const fetchedUserTemplates: [UserTemplateEntity] = userTemplatesResult.data
    ?.me?.userTemplates as [UserTemplateEntity];

  console.log(fetchedUserTemplates);

  return (
    <div className="container mx-auto px-4 pt-4 md:bg-white md:w-2/5 md:mx-0 md:py-6 md:rounded-md">
      <h5 className="text-2xl font-bold">{templateType.name}</h5>
      <h5 className="text-xl font-bold pt-4">Vorlagen</h5>
      <ul className="list-none text-base font-normal pl-4 text-gray-600">
        {fetchedTemplates?.map((template, index) => {
          return (
            <li className="pt-4" key={index}>
              <Link
                to={{
                  pathname: `/Forms/Templates/Edit/${template.id}`,
                }}
                state={{
                  templateType: templateType.name,
                  name: template.name,
                  templateTypeId: templateType.id,
                  edit: false,
                }}
              >
                {template.name}
                <I className="h-5 float-right">
                  <ChevronRightIcon />
                </I>
              </Link>
            </li>
          );
        })}
      </ul>
      <h5 className="text-xl font-bold pt-4">Eigene Vorlagen "</h5>
      <ul className="list-none text-base font-normal pl-4 text-gray-600">
        {fetchedUserTemplates?.filter(ut => ut.templateType?.id === templateType.id)?.map((template, index) => {
          return (
            <li className="pt-4" key={index}>
              <Link
                to={{
                  pathname: `/Forms/Templates/Edit/${template.id}`,
                }}
                state={{
                  templateType: templateType.name,
                  name: template.name,
                  templateTypeId: templateType.id,
                  edit: true,
                }}
              >
                {template.name}
                <I className="h-5 float-right">
                  <ChevronRightIcon />
                </I>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Templates;
