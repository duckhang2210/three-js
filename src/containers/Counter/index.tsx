import { useCallback } from 'react';

import { Counter } from '../../components/Counter';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { decrement, increment } from '../../store/features/counter';

export function CounterContainer() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const incrementCallback = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const decrementCallback = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  return (
    <Counter
      count={count}
      increment={incrementCallback}
      decrement={decrementCallback}
    />
  );
}
