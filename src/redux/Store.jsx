import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import bookSlice from './bookSlice';

const persistConfig = {
    key: 'root',
    storage,
  };

  const rootReducer = combineReducers({
    books: bookSlice,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  });

  // Export the persistor for use with PersistGate
export const persistor = persistStore(store);

// Ensure you're exporting the store as well
export default store;