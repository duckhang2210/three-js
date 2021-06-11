import classnames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

type IProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, children, ...inputProps }: IProps) {
  return (
    <button
      {...inputProps}
      className={classnames(
        'px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700',
        className,
      )}
    >
      {children}
    </button>
  );
}
