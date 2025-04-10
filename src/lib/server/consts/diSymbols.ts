export const INTERFACE_SYMBOLS = {
  CLIENT: {
    IMySQLClient: Symbol('IMySQLClient')
  },
  REPOSITORY: {
    ITodoRepository: Symbol('ITodoRepository')
  },
  SERVICE: {
    ITodoFetchListService: Symbol('ITodoFetchListService')
  },
  USE_CASE: {
    ITodoFetchListUseCase: Symbol('ITodoFetchListUseCase')
  }
};
