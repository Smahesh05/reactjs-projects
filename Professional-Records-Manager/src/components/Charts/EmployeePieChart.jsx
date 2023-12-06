import { Chart } from "react-google-charts";

// const TOTAL_USERS = 1024;
const FULLTIME = 205;
const PARTTIME = 317;
const DAILYWAGE = 502;

const data = [
  ["Employeement Type", "Count", { role: "tooltip" }],
  [`Full time = ${FULLTIME}`, FULLTIME, `Full time: ${FULLTIME}`],
  [`Part time = ${PARTTIME}`, PARTTIME, `Part time: ${PARTTIME}`],
  [`Daily wage = ${DAILYWAGE}`, DAILYWAGE, `Daily wage: ${DAILYWAGE}`],
];

const options = {
  title: "Employment Type",
};

function EmployeePieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"90%"}
      height={"280px"}
    />
  );
}

export default EmployeePieChart;
