import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from '../dashboard/Stat';

function Stats({ bookings, confirmedStays }) {
  const numBookings = bookings.length;

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
        value={numBookings}
      />
      <Stat
        title='Checkins'
        color='indigo'
        icon={<HiOutlineCalendarDays />}
        value={numBookings}
      />
      <Stat
        title='Occupancy Rate'
        color='yellow'
        icon={<HiOutlineChartBar />}
        value={numBookings}
      />
    </>
  );
}

export default Stats;
