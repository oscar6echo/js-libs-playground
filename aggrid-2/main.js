const gridOptions = {
  columnDefs: [
    { field: "country", rowGroup: true, hide: true },
    { field: "year", rowGroup: true, hide: true },
    { field: "sport", minWidth: 200 },
    { field: "athlete", minWidth: 200 },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
    { field: "age" },
    { field: "date", minWidth: 140 },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 100,
    filter: true,
    sortable: true,
    resizable: true,
  },
  autoGroupColumnDef: {
    minWidth: 200,
  },
  enableRangeSelection: true,
  animateRows: true,
};

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", function () {
  const gridDiv = document.querySelector("#myGrid");
  const g = new agGrid.Grid(gridDiv, gridOptions);

  console.log("before");
  fetch("olympicWinnersSmall.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      g.gridOptions.api.setRowData(data);
    });
});
