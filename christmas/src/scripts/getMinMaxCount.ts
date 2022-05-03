import { data, ToyData } from '../assets/data/data';

function getMinMaxCount(): Array<number> {
  let minCount: number = +data[0].count;
  let maxCount: number = +data[0].count;

  data.forEach((value: ToyData) => {
    if (+value.count < minCount) {
      minCount = +value.count;
    }
    if (+value.count > maxCount) {
      maxCount = +value.count;
    }
  });

  return [minCount, maxCount];
}

export default getMinMaxCount;
