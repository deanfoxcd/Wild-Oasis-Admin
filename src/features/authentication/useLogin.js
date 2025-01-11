import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { login } from '../../services/apiAuth';

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: loginMutate, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Email or password incorrect');
    },
  });
  return { loginMutate, isLoading };
}

export default useLogin;
