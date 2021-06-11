import { Button } from '../Button';

interface IProps {
  increment: () => void;
  decrement: () => void;
  count: number;
}

export function Counter({ increment, decrement, count }: IProps) {
  return (
    <div className="bg-red-500">
      <div>
        <Button
          className="block"
          aria-label="Increment value"
          onClick={increment}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          className="block"
          ria-label="Decrement value"
          onClick={decrement}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}
