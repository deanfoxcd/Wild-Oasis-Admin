import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useSettings from './useSettings';
import Spinner from '../../ui/Spinner';
import useEditSettings from './useEditSettings';

export default function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { editSettings, isEditing } = useEditSettings();

  if (isLoading) return <Spinner />;

  function handleEdit(e, field) {
    const { value } = e.target;

    if (!value) return;
    editSettings({ [field]: value });
  }

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          type='number'
          id='min-nights'
          defaultValue={minBookingLength}
          disabled={isEditing}
          onBlur={(e) => handleEdit(e, 'minBookingLength')}
        />
      </FormRow>

      <FormRow label='Maximum nights/booking'>
        <Input
          type='number'
          id='max-nights'
          defaultValue={maxBookingLength}
          disabled={isEditing}
          onBlur={(e) => handleEdit(e, 'maxBookingLength')}
        />
      </FormRow>

      <FormRow label='Maximum guests/booking'>
        <Input
          type='number'
          id='max-guests'
          defaultValue={maxGuestsPerBooking}
          disabled={isEditing}
          onBlur={(e) => handleEdit(e, 'maxGuestsPerBooking')}
        />
      </FormRow>

      <FormRow label='Breakfast price'>
        <Input
          type='number'
          id='breakfast-price'
          defaultValue={breakfastPrice}
          disabled={isEditing}
          onBlur={(e) => handleEdit(e, 'breakfastPrice')}
        />
      </FormRow>
    </Form>
  );
}
