import * as ServiceWorker from './sw';
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import { light, dark } from 'styles';
import Header from 'components/layout/Header/header';

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
                    <main>
                        <h1>Testing</h1>
                    </main>
                    <footer />
                </div>
            </ThemeProvider>
        );
    }
}

ServiceWorker.unregister();

export default App;
