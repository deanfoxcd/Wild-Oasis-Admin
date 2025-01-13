import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateSetting } from '../../services/apiSettings';

function useEditSettings() {
  const queryClient = useQueryClient();

  const { mutate: editSettings, isPending: isEditing } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success('Settings updated successfully');
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editSettings, isEditing };
}

export default useEditSettings;
