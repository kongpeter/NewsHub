import React, { Component } from 'react';
import { Container,  Tab, Tabs } from 'native-base';
import Tab1 from './Tabs/tabOne';
import Tab2 from './Tabs/tabTwo';

export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab tabStyle={{ backgroundColor: 'white' }}
                        activeTabStyle={{ backgroundColor: 'red' }}
                        heading="General News">
                        <Tab1 />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: 'white' }}
                        activeTabStyle={{ backgroundColor: 'red' }}
                        heading="Tech News">
                        <Tab2 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}