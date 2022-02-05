import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/Abiree" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link
          href="https://www.linkedin.com/in/abire-ghallabi-bb512119a/"
          rel="noreferrer noopener"
          target="_blank"
        >
          LinkdIn
        </Styled.Link>
        
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
