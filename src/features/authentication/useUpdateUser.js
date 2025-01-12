import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateCurrentUser } from '../../services/apiAuth';

function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUserMutate, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success('User account updated successfully');
      queryClient.invalidateQueries(['user']);
    },
    onError: (err) =>
      toast.error(`There was a problem updating the user. ${err.message}`),
  });
  return { updateUserMutate, isUpdating };
}

export default useUpdateUser;
