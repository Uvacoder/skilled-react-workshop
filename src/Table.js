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
                  //h is { label: "Name", id: "name" },
                  return <td key={`cell-${i}-${j}`}>{d[h.id]}</td>;
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
