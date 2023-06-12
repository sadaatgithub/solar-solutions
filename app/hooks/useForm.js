import { useState,useEffect } from 'react';
import { submitContactForm } from '@/lib/submitContactForm';


const useForm = (initialState, onSubmit) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted,setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true)
    try {
     await submitContactForm(values)
      setValues(initialState);
      setIsSubmitted(true)
      setIsSubmitting(false);

    } catch (error) {
      console.log(error)
    }

  };

  useEffect(() => {
    
  }, [errors, initialState, isSubmitting, onSubmit,isSubmitted]);

  return {
    values,
    errors,
    isSubmitted,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
