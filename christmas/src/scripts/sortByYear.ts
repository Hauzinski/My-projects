import { ToyData } from '../assets/data/data';

function sortByMinYear(data: Array<ToyData>): Array<ToyData> {
  return data.sort((a, b) => {
    if (+a.year > +b.year) {
      return 1;
    }
    if (+a.year < +b.year) {
      return -1;
    }
    return 0;
  });
}

function sortByMaxYear(data: Array<ToyData>): Array<ToyData> {
  return data.sort((a, b) => {
    if (+a.year < +b.year) {
      return 1;
    }
    if (+a.year > +b.year) {
      return -1;
    }
    return 0;
  });
}

export { sortByMinYear, sortByMaxYear };
