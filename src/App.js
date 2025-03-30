
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ContextProvider } from "./context/ContextProvider";
import Home from "./containers/Home";
import { RecoilRoot } from "recoil";
   
   const App = () => {
    return (
            <RecoilRoot>
        <Provider store={store}>
                <ContextProvider>
                    <div style={{ textAlign: "center", padding: "20px" }}>
                        <h1>🚀 Welcome to the react-state-management-tools with Redux + Context + API App!</h1>
                        <Home />
                    </div>
                </ContextProvider>
        </Provider>
            </RecoilRoot>
    );
};

export default App;