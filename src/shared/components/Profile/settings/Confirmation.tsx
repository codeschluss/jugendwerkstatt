import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "../../../../client/components/ui/Button";
import AuthInput from "../../authentication/AuthInput";
import { useDeleteMeMutation } from "../../../../GraphQl/graphql";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function DeleteConfirmation() {
  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = React.useState<string>("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const passwordHandler = (event: any) => {
    setPassword(event.target.value);
  };

  const [deleteAccount] = useDeleteMeMutation();

  const deleteMeHandler = () => {
    deleteAccount({
      variables: {
        password: password,
      },
    });
  };

  return (
    <div>
      <Button isDisabled={true} isValidated={true} click={handleOpen}>
        Profil löschen
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirmation
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            In order to delete your account you must provide your password
          </Typography>

          <ul className="my-5">
            <h3 className="font-semibold">please keep in mind that:</h3>
            <li>You are not able to return your account,</li>
            <li>Your data will be lost forever,</li>
            <li>any course you followed will kick you,</li>
            <li>you will die one day</li>
          </ul>
          <div>
            <p className="my-2 font-semibold">
              Please for your own security, enter your password
            </p>
            <AuthInput
              onChange={passwordHandler}
              value={password}
              type="password"
              id="password"
              inputClassName="w-full text-xl p-3 peer focus:outline-none border-2 rounded-md relative"
            />
            <div className="flex justify-between">
              {" "}
              <Button
                isDisabled={password !== "" ? true : false}
                isValidated={password !== "" ? true : false}
                click={deleteMeHandler}
              >
                Ich stimme zu
              </Button>
              <button
                className="bg-gray-300 w-full rounded-3xl  "
                onClick={handleClose}
              >
                Abbrechen
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
