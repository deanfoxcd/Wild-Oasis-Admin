import { HiArrowRightOnRectangle } from 'react-icons/hi2';

import ButtonIcon from '../../ui/ButtonIcon';
import useLogout from './useLogout';
import Spinner from '../../ui/Spinner';
import SpinnerMini from '../../ui/SpinnerMini';

function Logout() {
  const { logoutMutate, isLoggingOut } = useLogout();

  if (isLoggingOut) return <Spinner />;

  return (
    <ButtonIcon onClick={logoutMutate} disabled={isLoggingOut}>
      {isLoggingOut ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
