let data = [];
const fetchData = (cb) => {
  setTimeout(() => {
    console.log("Data fetched");
    data = [1, 2, 3, 4, 5];
    cb();
  }, 2000);
};

const display = () => {
  console.log("Display Function");
  console.log(data);
};
fetchData(display);
