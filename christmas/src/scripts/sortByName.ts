import { ToyData } from '../assets/data/data';

function sortByMinName(data: Array<ToyData>): Array<ToyData> {
  return data.sort((a, b) => {
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
}

function sortByMaxName(data: Array<ToyData>): Array<ToyData> {
  return data.sort((a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });
}

export { sortByMinName, sortByMaxName };
