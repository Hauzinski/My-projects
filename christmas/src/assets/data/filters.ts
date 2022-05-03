import getMinMaxCount from '../../scripts/getMinMaxCount';
import getMinMaxYear from '../../scripts/getMinMaxYear';

interface Filters {
  count: Array<string>;
  year: Array<string>;
  shape: Array<string>;
  color: Array<string>;
  size: Array<string>;
  favorite: boolean;
}

const filters: Filters = {
  count: [`${getMinMaxCount()[0]}`, `${getMinMaxCount()[1]}`],
  year: [`${getMinMaxYear()[0]}`, `${getMinMaxYear()[1]}`],
  shape: [],
  color: [],
  size: [],
  favorite: false,
};

export { filters, Filters };
