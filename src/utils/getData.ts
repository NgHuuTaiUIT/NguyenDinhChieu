import { cloneDeep } from "lodash";

// import data from "assets/data/data.json";
// export const getNewsData = () => {
//   return data;
// };

export const getData = async () => {
  return await fetch("assets/data/data.json", {
    method: "GET"
  }).then(res => res.json());
};
