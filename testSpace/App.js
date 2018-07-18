import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import HomeIcon from "./HomeIcon"
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
            <HomeIcon />
              
            </Button>
            <Button vertical>
            <HomeIcon />
              
            </Button>
            <Button vertical active>
              <HomeIcon />
              
            </Button>
            <Button vertical>
            <HomeIcon />
              
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}