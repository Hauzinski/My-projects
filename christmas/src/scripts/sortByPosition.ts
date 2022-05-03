import { ToyData } from '../assets/data/data';

function sortByMinPosition(data: Array<ToyData>): Array<ToyData> {
  return data.sort((a, b) => {
    if (+a.num > +b.num) {
      return 1;
    }
    if (+a.num < +b.num) {
      return -1;
    }
    return 0;
  });
}

function sortByMaxPosition(data: Array<ToyData>): Array<ToyData> {
  return data.sort((a, b) => {
    if (+a.num < +b.num) {
      return 1;
    }
    if (+a.num > +b.num) {
      return -1;
    }
    return 0;
  });
}

export { sortByMinPosition, sortByMaxPosition };
