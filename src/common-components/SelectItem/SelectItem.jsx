const SelectItem = ({ items, onSelectItem }) => {
  const selectApp = (event) => {
    onSelectItem(event.target.dataset.value);
  };

  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <button type="button" onClick={selectApp} data-value={item}>
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export { SelectItem };
