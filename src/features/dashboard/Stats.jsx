import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';

import Stat from '../dashboard/Stat';

import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  const checkedinNights = confirmedStays.reduce(
    (acc, stay) => acc + stay.numNights,
    0
  );
  const occupancy = Math.round(
    (checkedinNights / (numDays * cabinCount)) * 100
  );

  return (
    <>
      <Stat
        title='Bookings'
        color='blue'
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title='Sales'
        color='green'
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title='Checkins'
        color='indigo'
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title='Occupancy Rate'
        color='yellow'
        icon={<HiOutlineChartBar />}
        value={`${occupancy}%`}
      />
    </>
  );
}

export default Stats;
