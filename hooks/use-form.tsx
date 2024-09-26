import { useState } from 'react';

type FormElement = Record<string, any>;

export function useForm(initialState = {}): {
  formData: Record<string, any>;
  updateForm: (input: FormElement) => void;
  resetForm: () => void;
  clearedInput: (inputName: string) => void;
  isValid: () => boolean;
} {
  const [formData, setFormData] = useState(initialState);

  const updateForm = (input: FormElement) => {
    setFormData((oldData) => ({
      ...oldData,
      ...input,
      // getFormData({ data: oldData, field: inputName, value }),
    }));
  };

  const clearedInput = (inputName: string) => {
    setFormData((formData) => ({
      ...formData,
      [inputName]: '',
    }));
  };

  const resetForm = () => setFormData(initialState);

  const isValid = (): boolean => {
    const data: Record<string, any> = formData;
    if (!Object.keys(data).length) return false;
    return Object.values(data).every((value) => Boolean(value));
  };

  return {
    formData,
    updateForm,
    resetForm,
    clearedInput,
    isValid,
  };
}

function getFormData({
  data,
  field,
  value,
}: {
  data: Record<string, any> | any;
  field: string;
  value?: any;
}) {
  const symbol = '.';
  const isNestedField = field.indexOf(symbol) !== -1;

  if (!isNestedField) {
    return {
      ...data,
      [field]: value,
    };
  }

  const [parentField, nestedField] = field.split(symbol);
  return {
    ...data,
    [parentField]: {
      ...data[parentField],
      [nestedField]: value,
    },
  };
}
