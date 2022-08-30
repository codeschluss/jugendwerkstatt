import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  TemplateEntity,
  useDeleteTemplateMutation,
  useDeleteUserTemplateMutation,
  useGetMeBasicQuery,
  useGetMeUserTemplatesQuery,
  useGetTemplatesQuery,
  UserTemplateEntity,
} from "../../../../GraphQl/graphql";
import I from "../../../../shared/components/ui/IconWrapper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Templates: React.FC = () => {
  const location = useLocation();
  const { templateType }: any = location.state;
  const user = useGetMeBasicQuery();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [deleteUserTemplate] = useDeleteUserTemplateMutation();
  const templatesResult = useGetTemplatesQuery({
    variables: {
      id: templateType.id,
    },
    fetchPolicy: "network-only",
  });

  const fetchedTemplates: [TemplateEntity] = templatesResult.data?.getTemplates
    ?.result as [TemplateEntity];

  const userTemplatesResult = useGetMeUserTemplatesQuery({
    fetchPolicy: "network-only",
  });

  const fetchedUserTemplates: [UserTemplateEntity] = userTemplatesResult.data
    ?.me?.userTemplates as [UserTemplateEntity];

  return (
    <div className="container mx-auto md:m-12 px-4 pt-4 md:bg-white md:w-2/5  md:py-6 md:rounded-md">
      <h5 className="text-2xl font-bold">{templateType.name}</h5>
      <h5 className="text-xl font-bold pt-4">Vorlagen</h5>
      <ul className="list-none text-base font-normal pl-4 text-gray-600">
        {fetchedTemplates?.map((template, index) => {
          return (
            <li className="pt-4 " key={index}>
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
      <h5 className="text-xl font-bold pt-4 ">Eigene Formulare</h5>
      <ul className="list-none text-base font-normal pl-4 text-gray-600">
        {fetchedUserTemplates
          ?.filter((ut) => ut.templateType?.id === templateType.id)
          ?.map((template, index) => {
            return (
              <li
                className="pt-4 flex  justify-between items-center"
                key={index}
              >
                {template.name}
                <div className="h-5 flex   justify-between float-right items-center">
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
                    {" "}
                    <PencilIcon className="mx-3 w-5 text-green-700" />
                  </Link>
                  <TrashIcon
                    className="mx-3  w-6 text-red-500 cursor-pointer"
                    onClick={handleClickOpen}
                  />
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Vorlage Löschen?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Bist du sicher, dass du die Vorlage unwiderruflich
                        löschen möchtest? Die Vorlage kann nicht
                        wiederhergestellt werden.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>abbrechen</Button>
                      <Button
                        onClick={() =>
                          deleteUserTemplate({
                            variables: {
                              id: template?.id,
                            },
                          })
                            .then(() => userTemplatesResult.refetch())
                            .finally(() => setOpen(false))
                        }
                      >
                        sicher
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Templates;
