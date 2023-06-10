import { useState,useEffect } from 'react';

const useForm = (initialState, onSubmit) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    // && Object.keys(errors).length === 0
    if (isSubmitting ) {
      onSubmit();
      setValues(initialState);
      setIsSubmitting(false);
    }
  }, [errors, initialState, isSubmitting, onSubmit]);

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
