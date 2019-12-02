import React from 'react';
import Page from '../components/Page';
import Row from '../components/Row';
import Half from '../components/Half';
import Header from '../components/Header';
import TextLight from '../components/TextLight';
import Paragraph from '../components/Paragraph';
import Badge from '../components/Badge';

const About = (props) => {
    const mobile = (props.width <= 1200);
    return (
        <Page
            active={props.active}
            style={
                mobile ?
                    { backgroundImage: `url(${props.image.path ? props.image.path : ''})`, backgroundSize: 'cover' }
                    :
                    {}
            }>
            <Row>
                <Half style={
                    mobile ?
                        {}
                        :
                        { backgroundImage: `url(${props.image.path ? props.image.path : ''})`, backgroundSize: 'cover' }
                }>
                    <Header active={props.active} delay={0}>O mnie</Header>
                    <article>
                        <Paragraph active={props.active} delay={0}>Mam na imię Krzysiek i jestem absolwentem inżynierskich studiów informatycznych. Aspiruję na zostanie Web Developerem. Moim celem jest tworzenie wydajnych aplikacji webowych i kreatywnych stron internetowych. Posiadam również doświadczenie w programowaniu aplikacji mobilnych na system Android. Do moich zainteresowań i hobby zawsze należało programowanie, muzyka elektroniczna, sporty wodne, podróże.</Paragraph>
                    </article>
                </Half>
                <Half>
                    <div style={{ marginBottom: '2rem' }}>
                        <Header active={props.active} delay={1}>Umiejętności</Header>
                        <article>
                            <Paragraph active={props.active} delay={1}>
                                <Badge>JavaScript ES6</Badge>
                                <Badge>Java</Badge>
                                <Badge>PHP</Badge>
                                <Badge>React</Badge>
                                <Badge>React Native</Badge>
                                <Badge>HTML 5</Badge>
                                <Badge>JSON</Badge>
                                <Badge>XML</Badge>
                                <Badge>CSS 3</Badge>
                                <Badge>SCSS</Badge>
                                <Badge>Bootstrap</Badge>
                                <Badge>Git</Badge>
                                <Badge>NPM</Badge>
                                <Badge>Gulp.js</Badge>
                                <Badge>Android SDK</Badge>
                            </Paragraph>
                        </article>
                    </div>
                    <div>
                        <Header active={props.active} delay={2}>Wykształcenie</Header>
                        <article>
                            <Paragraph active={props.active} delay={1}>
                                <TextLight>2019 - obecnie</TextLight>
                                Studia podyplomowe Technologie Internetowe, Politechnika Wrocławska
                        </Paragraph>
                            <Paragraph active={props.active} delay={2}>
                                <TextLight>2015 - 2019</TextLight>
                                Studia inżynierskie, kierunek Informatyka na wydziale Podstawowych Problemów Techniki, Politechnika Wrocławska
                        </Paragraph>
                        </article>
                    </div>
                </Half>
            </Row>
        </Page >
    )
};

export default About;