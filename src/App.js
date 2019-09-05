import * as ServiceWorker from './sw';
import React, { Component } from 'react';
import GlobalStyle from 'styles/global';
import Header from 'components/Header';
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';
import Posts from 'components/Posts';
import { ThemeProvider } from 'styled-components';
import { light, dark } from 'styles';
import 'styles/fonts.css';

class App extends Component {
    state = {
        theme: 'light',
    };

    handleToggleTheme() {
        this.setState(previousState => ({
            theme: previousState.theme !== 'light' ? 'light' : 'dark',
        }));
    }

    render() {
        return (
            <ThemeProvider theme={this.state.theme === 'light' ? light : dark}>
                <div>
                    <GlobalStyle />
                    <Header theme={this.state.theme} toggleTheme={() => this.handleToggleTheme()} />
                    <Main sidebar={<Sidebar />} content={<Posts />}></Main>
                </div>
            </ThemeProvider>
        );
    }
}

ServiceWorker.unregister();

export default App;
