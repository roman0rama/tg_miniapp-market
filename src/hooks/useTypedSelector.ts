import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../features/redux/index';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector