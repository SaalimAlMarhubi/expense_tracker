import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":250,"category":"Business","type":"Income","date":"2020-12-30","id":"7b833e6e-aaa9-42f5-867c-438fc73fc1e2"},{"amount":500,"category":"Salary","type":"Income","date":"2020-12-31","id":"38b7fa38-8eb6-47e0-ba3a-3b555a1b9b89"},{"amount":55,"category":"Travel","type":"Expense","date":"2020-12-26","id":"c1e06f4a-0c0d-4b55-9a94-f269957526ee"},{"amount":75,"category":"House","type":"Expense","date":"2020-12-27","id":"f987cd96-7b19-492d-9db5-1e7acfafd5ee"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Action Creators
  const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction});
 
  const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0);

  return (
    <ExpenseTrackerContext.Provider value={{ 
      deleteTransaction,
      addTransaction,
      transactions,
      balance
    }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
}