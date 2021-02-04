const Table = (props) => {
  const { data, headers } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((h) => {
              //h is { label: "Name", id: "name" },
              return <td key={h.label}>{h.label}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            //h is { name: "Allen", age: 35 },
            return (
              <tr key={`row-${i}`}>
                {headers.map((h, j) => {
                  //h is { label: "Name", id: "name", component: Checkbox },
                  const CellComponent = h.component;
                  const label = d[h.id];
                  const key = `cell-${i}-${j}`;
                  if (CellComponent) {
                    return <CellComponent key={key} select={label} />;
                  } else return <td key={key}>{label}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
