// src/dashboard/hooks/useFormState.ts
import { useState } from 'react';


export function useFormState<T extends Record<string, any>>(initialState: T) {
const [formState, setFormState] = useState<T>(initialState);


const handleChange = (
e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
const { name, value } = e.target;
setFormState(prev => ({ ...prev, [name]: value }));
};


const handleFileChange = (name: keyof T, file: File | null) => {
setFormState(prev => ({ ...prev, [name]: file }));
};


const resetForm = () => setFormState(initialState);


return {
formState,
setFormState,
handleChange,
handleFileChange,
resetForm
};
}