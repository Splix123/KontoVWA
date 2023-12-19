// Libraries
import { IconButton } from "@mui/material";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";

// Icons
import { Delete } from "@mui/icons-material";

// Stores
import kontenStore from "../store/kontenStore.store";

// Types
type Props = {
  buchungsId: number;
};

type deleteProps = {
  kontoId: number;
  buchungsId: number;
};

// Functions
// TODO: Fix URL
async function deleteBuchung({ kontoId, buchungsId }: deleteProps) {
  const response = await fetch(
    `http://localhost:3000/konto/${kontoId}/${buchungsId}`,
    {
      method: "DELETE",
    }
  );
  return response.json();
}

function OnHoverButtons({ buchungsId }: Props) {
  //Fetch id from url
  const { kontoId } = useParams();

  // Mutations
  const { mutateAsync: deleteBuchungMutation } = useMutation({
    mutationFn: deleteBuchung,
  });

  // States
  const { removeBuchung } = kontenStore();

  const handleDeleteClick = () => {
    deleteBuchungMutation(Number(kontoId), buchungsId);
    removeBuchung(Number(kontoId), buchungsId);
  };
  return (
    <IconButton color="primary" onClick={handleDeleteClick}>
      <Delete />
    </IconButton>
  );
}

export default OnHoverButtons;
