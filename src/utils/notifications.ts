import { toast } from 'react-toastify';

export const success = () => toast.success('Great! Your password is strong and secure!');
export const warn = () => toast.warn('Your password could be stronger. Consider adding more complexity!');
export const error = () => toast.error('Your password is weak. Please choose a stronger password.');