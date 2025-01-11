import { useMutation } from '@tanstack/react-query';
import { signUp } from '../../services/apiAuth';
import toast from 'react-hot-toast';

function useSignUp() {
  const { mutate: signUpMutate, isPending: isSigningUp } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success(
        "User signed up successfully. Please verify the new account form the user's email account."
      );
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Error signing up user');
    },
  });
  return { signUpMutate, isSigningUp };
}

export default useSignUp;
