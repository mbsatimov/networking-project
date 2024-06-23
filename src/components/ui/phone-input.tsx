import * as React from 'react';
import * as RPNInput from 'react-phone-number-input';

import type { InputProps } from '@/components/ui/input';
import { Input } from '@/components/ui/input';
import { cn } from '@/utils/cn';

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <Input
      className={cn(className)}
      {...props}
      ref={ref}
    />
  ),
);
InputComponent.displayName = 'InputComponent';

type PhoneInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> &
  Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange'> & {
    onChange?: (value: RPNInput.Value) => void;
  };

export const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> = React.forwardRef<
  React.ElementRef<typeof RPNInput.default>,
  PhoneInputProps
>(({ className, onChange, ...props }, ref) => (
  // eslint-disable-next-line react/jsx-pascal-case
  <RPNInput.default
    ref={ref}
    inputComponent={InputComponent}
    countrySelectComponent="div"
    countries={['UZ']}
    defaultCountry="UZ"
    defaultValue="+998"
    maxLength={17}
    onChange={(value) => onChange?.(value || ('' as RPNInput.Value))}
    {...props}
  />
));
PhoneInput.displayName = 'PhoneInput';
