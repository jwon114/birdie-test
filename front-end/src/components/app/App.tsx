import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Button from 'react-bootstrap/Button';
import { submitForm } from '@App/store/actions';

import { getCareRecipients, getEventTypes } from '@App/store/selectors';

import 'bootstrap/dist/css/bootstrap.min.css';

import TopNavBar from '@App/components/TopNavbar';

interface AppProps {
  careRecipients: Array<string>;
  eventTypes: Array<string>;
  submitForm: Function;
}

interface AppState {

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
    console.log('this.props', this.props);
    return (
      <>
        <GlobalStyle />
        <TopNavBar
          careRecipients={this.props.careRecipients}
          eventTypes={this.props.eventTypes}
          submitForm={(id: string, eventType: string) => this.props.submitForm(id, eventType)}
        />
        <AppContainer>
          <Button>Hello</Button>
          {this.props.eventTypes}
        </ AppContainer>
      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => ({
  careRecipients: getCareRecipients(state),
  eventTypes: getEventTypes(state)
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  submitForm: (id: string, eventType: string) => dispatch(submitForm(id, eventType))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);