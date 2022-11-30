import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, getFilterValue } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(updateFilter(e.target.value))}
        autoComplete="off"
      />
    </Label>
  );
}
