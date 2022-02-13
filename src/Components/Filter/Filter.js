import s from "./Filter.module.css";

export default function Filter({ value, changeFilter }) {
  return (
    <div className={s.filter}>
      <label className={s.label}>Find contact by name</label>
      <input onChange={changeFilter} className={s.input} value={value} type="text" name="filter" />
    </div>
  );
}
