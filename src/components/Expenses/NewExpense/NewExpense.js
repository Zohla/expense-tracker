import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isOpen, setOpen] = useState("false");
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setOpen(false);
  };

  const handleOpenForm = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="new-expense">
      {!isOpen && (
        <button type="button" onClick={handleOpenForm}>
          Add new expense
        </button>
      )}
      {isOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};
export default NewExpense;
