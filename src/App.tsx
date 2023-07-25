import { Layout } from 'layouts/Layout'
import { Header } from 'parts/Header'
import { Intro } from 'parts/Intro'
import { About } from 'parts/About'
import { Projects } from 'parts/Projects'
import { Contacts } from 'parts/Contacts'
import { Footer } from 'parts/Footer'
import { Section } from 'ui/Section'

export function App() {
  return (
    <Layout>
      <Section header theme='light' hasGuides borderBottom='dashed'>
        <Header />
      </Section>
      <Section padded theme='light' hasGuides>
        <Intro />
      </Section>
      <Section theme='dark' angleTop id='about'>
        <About />
      </Section>
      <Section padded theme='light' hasGuides id='projects'>
        <Projects />
      </Section>
      <Section theme='dark' hasGuides angleTop id='contacts'>
        <Contacts />
      </Section>
      <Section theme='dark' borderTop='solid'>
        <Footer />
      </Section>
    </Layout>
  )
}