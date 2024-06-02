"use client";
import { store } from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<NextUIProvider>
					<Toaster />
					{children}
				</NextUIProvider>
			</PersistGate>
		</Provider>
	);
}
