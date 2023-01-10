import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue, getValue } from 'redux/contactsSlice';
import { LabelFilter, InputFilter } from './Filter.styled';

export function Filter() {
  const filterName = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const getInputValue = event => {
    dispatch(getValue(event.currentTarget.value));
  };
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        value={filterName}
        onChange={getInputValue}
      />
    </LabelFilter>
  );
}
