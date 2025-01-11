import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/apiAuth';

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logoutMutate, isPending: isLoggingOut } = useMutation({
    mutationFn: logout,
    mutationKey: ['user'],
    onSuccess: () => {
      navigate('/login', { replace: true });
      queryClient.removeQueries();
    },
    onError: (err) => {
      console.log('ERROR', err);
    },
  });
  return { logoutMutate, isLoggingOut };
}

export default useLogout;
