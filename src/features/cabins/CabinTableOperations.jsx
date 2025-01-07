import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField='discount'
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No Discount' },
          { value: 'with-discount', label: 'With Discount' },
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-dsc', label: 'Sort by name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by price (high to low)' },
          { value: 'regularPrice-dsc', label: 'Sort by price (low to high)' },
          {
            value: 'maxCapacity-asc',
            label: 'Sort by max capacity (low to high)',
          },
          {
            value: 'maxCapacity-dsc',
            label: 'Sort by max capacity (high to low)',
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
