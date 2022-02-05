import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Newsletter extends SectionTitle {
  namePlaceholder: string;
  emailPlaceholder: string;
  submitPlaceholder: string;
 
}

const Newsletter: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "newsletter section" } }) {
        frontmatter {
          title
          subtitle
          namePlaceholder
          emailPlaceholder
          submitPlaceholder
          
        }
      }
    }
  `);

  const newsletter: Newsletter = markdownRemark.frontmatter;

  return (
    <Styled.Newsletter>
      <Container section>
      
        <TitleSection title={newsletter.title} subtitle={newsletter.subtitle} center />
        
        <Styled.Form>
        <form action="https://formspree.io/f/mpzkprkd" method="post">
          <Styled.Input type="text" placeholder={newsletter.namePlaceholder} name="Name" required/>
          <Styled.Input type="email" placeholder={newsletter.emailPlaceholder} name="Email" required/>
          <Styled.Textarea placeholder="Message" name="Message" required/>
       
          <Button primary block>
            {newsletter.submitPlaceholder}
          </Button>
          </form>
        </Styled.Form>
        
      </Container>
    </Styled.Newsletter>
  );
};

export default Newsletter;
