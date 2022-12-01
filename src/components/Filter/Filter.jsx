import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';

export function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilterValue);

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
