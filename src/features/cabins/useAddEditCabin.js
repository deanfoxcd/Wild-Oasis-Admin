import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createCabin, editCabin } from '../../services/apiCabins';

function useAddEditCabin(isEditSession = false) {
  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: isEditSession ? editCabin : createCabin,
    onSuccess: () => {
      toast.success(
        isEditSession
          ? 'Cabin updated successfully'
          : 'Cabin created successfully'
      );
      queryClient.invalidateQueries(['cabins']);
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  return { isCreating, mutate };
}

export default useAddEditCabin;
