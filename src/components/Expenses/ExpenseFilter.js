import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label> Filter by year</label>
        <select value={props.selectedYear} onChange={yearChangeHandler}>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
