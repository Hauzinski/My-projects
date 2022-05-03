import { data, ToyData } from '../assets/data/data';

function getMinMaxYear(): Array<number> {
  let minYear: number = +data[0].year;
  let maxYear: number = +data[0].year;

  data.forEach((value: ToyData) => {
    if (+value.year < minYear) {
      minYear = +value.year;
    }
    if (+value.year > maxYear) {
      maxYear = +value.year;
    }
  });

  return [minYear, maxYear];
}

export default getMinMaxYear;
