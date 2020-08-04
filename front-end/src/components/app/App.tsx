import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Button from 'react-bootstrap/Button';
import { fetchEventTypes } from '@App/store/actions';

import { getEventTypes } from '@App/store/selectors';

import 'bootstrap/dist/css/bootstrap.min.css';

import TopNavBar from '@App/components/TopNavbar';

interface AppProps {
  fetchEventTypes: Function;
}

interface AppState {
  eventTypes: [];
}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #FFFFFF;
    > div {
      height: 100%;
    }
  }
`;

const AppContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <GlobalStyle />
        <TopNavBar />
        <AppContainer>
          <Button onClick={() => this.props.fetchEventTypes()}>Hello</Button>
        </ AppContainer>
      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => ({
  eventTypes: getEventTypes(state)
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  fetchEventTypes: () => dispatch(fetchEventTypes())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);