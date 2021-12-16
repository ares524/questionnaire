import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import createRootReducer from "redux/reducers";
import Header from "components/front/Header";
import "styles/theme.scss";
import { useRouter } from "next/router";
import { appWithTranslation } from 'next-i18next';

export const store = createStore(
  createRootReducer,
  compose(applyMiddleware(ReduxThunk))
);

const MyApp = ({ Component, pageProps, sidebarStatic }) => {
  const router = useRouter();
  React.useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  });
  return (
    <Provider store={store}>
        <>
          <Header />
          <Component {...pageProps} />
        </>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
