import React, { useState } from 'react';
import styled from 'styled-components';
import Tab from '../ui/Tab';
import Flex from '../ui/Flex';
import { Tabs } from '../data';

const StyledNavigation = styled.div`
    width: 100%;
    height: 4rem;
    border-bottom: 2px #f7f9fa dashed;
    padding-left: 23.5rem;
`;

const Navigation: React.FC = () => {
    const [tabs, setTabs] = useState(Tabs);

    const toggleTabs = (index: number) => {
        let newTabs = tabs.map((tab) => {
            tab.active = tab.id === index;
            return tab;
        });
        setTabs(newTabs);
    };

    return (
        <StyledNavigation>
            <Flex>
                {tabs.map((tab) => (
                    <Tab
                        onClick={() => toggleTabs(tab.id)}
                        active={tab.active}
                        key={tab.id}
                    >
                        {tab.title}
                    </Tab>
                ))}
            </Flex>
        </StyledNavigation>
    );
};

export default Navigation;
