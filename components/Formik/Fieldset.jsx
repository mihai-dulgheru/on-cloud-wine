import { useFormikContext } from 'formik';
import { get } from 'lodash';

const Fieldset = ({ label, help, name, children }) => {
  const { submitCount, touched, errors } = useFormikContext();
  const hasError = get(touched, name) && get(errors, name) && submitCount > 0;

  return (
    <fieldset className={`${hasError && 'has-error'}`}>
      {label && (
        <label
          htmlFor={name}
          className="form-label mb-0 w-full cursor-pointer font-semibold"
        >
          {label}
        </label>
      )}
      {children}
      <div className="form-help text-secondary first-letter text-sm">
        {hasError ? get(errors, name) : help}
      </div>
    </fieldset>
  );
};

export default Fieldset;
