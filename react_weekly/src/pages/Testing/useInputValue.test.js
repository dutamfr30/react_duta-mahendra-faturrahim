import { renderHook } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe('useInputValue Test', () => {
  it('should return an object with a value and onChange property', () => {
    const { result } = renderHook(() => useInputValue('initial value'));
    expect(result.current).toEqual({
      value: 'initial value',
      onChange: expect.any(Function),
    });
  });
  
  it('Return the initial value', () => {
    const { result } = renderHook(() => useInputValue('initial value'))
    expect(result.current.value).toBe('initial value');
  });

  it('Update the value on change', () => {
    const { result } = renderHook(() => useInputValue('initial value'));
    result.current.onChange({ target: { value: 'new value' }});
    expect(result.current.value).toBe('new value');
  });
})