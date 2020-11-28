export const getFormattedCurrentDate = () => new Date().toISOString().split('T')[0];

export const isValueNotIntegerNumber = (value: any) => !Number.isInteger(value);

export const isNumberNegative = (value: number) => value < 0;
