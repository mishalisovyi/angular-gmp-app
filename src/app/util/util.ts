export const getFormattedCurrentDate = () => new Date().toISOString().split('T')[0];

export const isInteger = (value: any) => Number.isInteger(value);

export const isNumberNegative = (value: number) => value < 0;
