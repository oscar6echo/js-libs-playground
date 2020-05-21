const columnDefs = [
  { headerName: "Make", field: "make" },
  { headerName: "Model", field: "model" },
  { headerName: "Price", field: "price" },
];

// specify the data
const rowData = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 },
];

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
};

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", function () {
  const gridDiv = document.querySelector("#myGrid");
  new agGrid.Grid(gridDiv, gridOptions);
});
