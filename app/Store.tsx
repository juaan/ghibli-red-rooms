import React, { FunctionComponent } from 'react';
import update from 'immutability-helper';

// Actions Type
export enum ActionTypes {
  GET_FILMS,
}

export const IndexColors = {
  0: 'red.400',
  1: 'teal.200',
  2: 'orange.200',
  3: 'pink.400',
  4: 'green.200',
  5: 'purple.200',
  6: 'yellow.200',
  7: 'green.200',
};

export interface FilmType {
  id: string;
  title: string;
  description: string;
  director: string;
  rt_score: string;
  release_date: string;
}

export interface FilmsPayload {
  films: FilmType[];
}

const initialState = {
  films: [],
};

export type ActionPayload = FilmsPayload;

interface DispatchType {
  type: ActionTypes;
  payload?: ActionPayload;
}

interface StoreType {
  state: typeof initialState;
  dispatch: React.Dispatch<DispatchType>;
}

// Initiate Store using react context
const Store = React.createContext<StoreType>(null);

// Reducer
const reducer = (
  state: typeof initialState,
  action: DispatchType,
): typeof initialState => {
  const payload = action.payload;
  switch (action.type) {
    case ActionTypes.GET_FILMS:
      return update(state, {
        films: { $set: (payload as FilmsPayload).films },
      });
    default:
      return state;
  }
};

interface Props {
  children: React.ReactNode;
  initialValue?: Record<string, any>;
}

// set Provider HOC
export const StoreProvider: FunctionComponent<Props> = React.memo(
  (props: Props) => {
    const { children, initialValue = {} } = props;
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };
    return (
      <Store.Provider value={Object.assign({}, value, initialValue)}>
        {children}
      </Store.Provider>
    );
  },
);

// export const StoreConsumer = Store.Consumer
export default Store;
