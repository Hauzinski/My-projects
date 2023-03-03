import { getLocalStorage, setLocalStorage } from './manageLocalStorage';

const state = {
  cache: {
    request: 'Test request',
    requestData: [],
    pageTokens: ['', ''],
  },
  sortFilters: {
    byDate: 'off',
    byViews: 'off',
    byLikes: 'off',
    byComments: 'off',
    byWord: '',
  },
  settings: {
    isAppSettings: false,
    videoOrder: 'date',
    countOfVideoPerPage: '24',
    mainPageScroll: 0,
  },
};

describe('Util test: getLocalStorage', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        store: {},
        getItem: jest
          .fn()
          .mockReturnValueOnce(null)
          .mockReturnValue('{"cache":"cache","sortFilters":"sort filters","settings":"settings"}'),
        setItem: jest.fn(),
      },
      writable: true,
    });
  });

  it('should call localStorage getItem', () => {
    const returnedStateValue = {
      cache: 'cache',
      sortFilters: 'sort filters',
      settings: 'settings',
    };

    expect(getLocalStorage()).toBeNull();
    expect(getLocalStorage()).toEqual(returnedStateValue);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(2);
  });

  it('should call localStorage setItem', () => {
    setLocalStorage(state);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
