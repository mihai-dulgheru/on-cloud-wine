import { useFormikContext } from 'formik';
import { Button } from '.';

const Submit = ({ children, className, isLoading, ...props }) => {
  const { isValid, validateOnMount } = useFormikContext();
  const disabled = isLoading || (validateOnMount && !isValid);

  return (
    <div className="flex items-center">
      <Button
        type="submit"
        className={`button full primary mt-4 ${className && className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
};

export default Submit;
