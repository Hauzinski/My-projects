import './sorting.css';

const settingsSortingContent = `
<div class="main__sorting">
<p>Сортировать:</p>
<select id="main__sortSelect" class="main__sortSelect">
  <option value="sortNameMin" selected>По имени от «А» до «Я»</option>
  <option value="sortNameMax">По имени от «Я» до «А»</option>
  <option value="sortYearMin">По году по возрастанию</option>
  <option value="sortYearMax">По году по убыванию</option>
</select>
</div>
`;

export default settingsSortingContent;
