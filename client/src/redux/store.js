// store.js

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default is localStorage for web
import userReducer from "./userSlice"; // your user slice file

// 1️⃣ Combine reducers (in case you have more than one slice)
const rootReducer = combineReducers({
    user: userReducer,
});

// 2️⃣ Set up persist configuration
const persistConfig = {
    key: "root",      // key in storage
    version: 1,
    storage,          // defaults to localStorage
};

// 3️⃣ Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4️⃣ Create store using persisted reducer
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // redux-persist uses non-serializable values internally
        }),
});

// 5️⃣ Create persistor (used with PersistGate in React)
export const persistor = persistStore(store);
