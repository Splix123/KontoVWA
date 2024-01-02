// Libraries
import { IconButton } from "@mui/material";
import { useMutation } from "react-query";

// Icons
import { Delete } from "@mui/icons-material";

// Stores
import buchungStore from "../store/buchungStore.store";

type Props = {
  buchungId: number;
};

// Functions
async function deleteBuchung(buchungId: Props) {
  const response = await fetch(
    `http://localhost:3000/buchung/${buchungId.buchungId}`,
    {
      method: "DELETE",
    }
  );
  return response.json();
}

function OnHoverButtons(buchungId: Props) {
  // Mutations
  const { mutateAsync: deleteBuchungMutation } = useMutation({
    mutationFn: deleteBuchung,
  });

  // States
  const { removeBuchung } = buchungStore();

  const handleDeleteClick = () => {
    deleteBuchungMutation(buchungId);
    removeBuchung(buchungId.buchungId);
  };
  return (
    <IconButton color="primary" onClick={handleDeleteClick}>
      <Delete />
    </IconButton>
  );
}

export default OnHoverButtons;
