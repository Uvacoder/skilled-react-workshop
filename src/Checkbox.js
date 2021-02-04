const Checkbox = (props) => {
  const { select } = props;
  return (
    <td>
      <input type="checkBox" checked={select} />
    </td>
  );
};

export default Checkbox;
