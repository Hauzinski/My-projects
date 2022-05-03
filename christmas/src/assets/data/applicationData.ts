import { filters, Filters } from './filters';
import filteredToyNumbers from './filteredToyNumbers';
import { options, Options } from './options';
import selectedToyCards from './selectedToyCards';

interface ApplicationData {
  filters: Filters;
  filteredToyNumbers: Array<string>;
  selectedToyCards: Array<string>;
  options: Options;
}

const cristmasApplicationData: ApplicationData = {
  filters,
  filteredToyNumbers,
  selectedToyCards,
  options,
};

export { cristmasApplicationData, ApplicationData };
