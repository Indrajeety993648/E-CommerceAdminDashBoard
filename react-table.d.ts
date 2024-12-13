import 'react-table';

declare module 'react-table' {
  export interface TableInstance<D extends object = {}> extends UsePaginationInstanceProps<D>, UseSortByInstanceProps<D> {}

  export interface TableState<D extends object = {}> extends UsePaginationState<D>, UseSortByState<D> {}

  export interface ColumnInterface<D extends object = {}> extends UseSortByColumnOptions<D> {}

  export interface ColumnInstance<D extends object = {}> extends UseSortByColumnProps<D> {}

  export interface Cell<D extends object = {}, V = any> extends UseSortByColumnProps<D> {}

  export interface HeaderGroup<D extends object = {}> extends UseSortByColumnProps<D> {}
}
