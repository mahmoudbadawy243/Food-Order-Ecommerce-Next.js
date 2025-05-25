// this is a fixed code and fixed steps that i can use in any program to inhance my work
// custom hooks that contain hooks that built in redux/toolkit inside it as a type-safty of TS , useSelector and useDispatch

import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from './store'

// thay are 2 hooks that i will use in redux as useSelector to deal with state and useDispatch to deal with actions
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // AppDispatch is the custom type that i built in store.ts
export const useAppSelector = useSelector.withTypes<RootState>()   // RootState is the custom type that i built in store.ts

