import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'

const Project02 = (props) => (
    <Page active={props.active} style={{ justifyContent: 'center' }}>
        <Row>
            <Half style={{ justifyContent: 'center' }}>
                <header>
                    <Header active={props.active} style={{ textAlign: 'right', width: '100%' }}>{'\{ Aplikacja mobilna do detekcji wysokości nut \}'}</Header>
                </header>
            </Half>
        </Row>
    </Page >
);

export default Project02;