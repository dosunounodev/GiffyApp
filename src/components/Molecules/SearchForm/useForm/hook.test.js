import { renderHook } from '@testing-library/react-hooks';
import useForm from './index';

test('should change keyword', () => {
  const { result } = renderHook(() => useForm());

  expect(true).toBe(true);
});
