import { Chart } from "react-google-charts";

// const TOTAL_USERS = 1024;
const MALE = 768;
const FEMALE = 256;

const data = [
  ["Gender", "Count", { role: "tooltip" }],
  [`Male = ${MALE}`, MALE, `Male: ${MALE}`],
  [`female = ${FEMALE}`, FEMALE, `Female: ${FEMALE}`],
];

const options = {
  title: "Key performance Indecator",
};

function GenderPieChart() {
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

export default GenderPieChart;
