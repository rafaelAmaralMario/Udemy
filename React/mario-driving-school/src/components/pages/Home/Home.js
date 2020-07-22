import React from "react";
// import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from 'react-icons/fa';

import { heroImage, aboutVideo, serv01, serv02, serv03, serv04, serv05 } from 'assets';

import { HeroBanner, Section, AccordionGroup } from 'components/molecules';
import { Button, Heading, Feature, Grid, Accordion } from 'components/atoms';
import { Footer, ProductGrid } from 'components/organisms';

const products = [
  {
    title: "1ª motorcycle and car driver license.",
    image: serv01,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    title: "1ª car driver license.",
    image: serv02,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    title: "1ª motorcycle driver license.",
    image: serv03,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    title: "Changing driver license category",
    image: serv04,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    title: "Driver License preparation class",
    image: serv05,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
]



const Home = () => (
  <>
    <HeroBanner image={heroImage}>
      <Heading><h1>Earn Your <strong>freedom</strong><br /> to go anywhere.</h1></Heading>
      <ul className="hero-banner">
        <li className="hero-banner-list-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </li>
        <li className="hero-banner-list-item">
          Aperiam odio, eum beatae dignissimos eveniet excepturi?
      </li>
        <li className="hero-banner-list-item">
          Porro quibusdam labore beatae veritatis optio debitis, corrupti ea aut
          nam voluptas qui incidunt officiis.
      </li>
      </ul>
      <Button variant="outlined" color="primary">Apply Now</Button>
    </HeroBanner>

    {/* Key Features */}
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title='The biggest and best fleet'>
          <p>This is A description about the new feature.</p>
        </Feature>

        <Feature icon={<FaKey />} title='Quicker driver license'>
          <p>This is A description about the new feature.</p>
        </Feature>

        <Feature icon={<FaMapMarkedAlt />} title='Well localized'>
          <p>This is A description about the new feature.</p>
        </Feature>

        <Feature icon={<FaAccessibleIcon />} title='Accessibility'>
          <p>This is A description about the new feature.</p>
        </Feature>
      </Grid>
    </Section>

    {/* Our Services */}
    <Section inverted>
      <Heading>
        <h2>Our Services</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>

    {/* Mario Driving School */}
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Mario Driving School</h2>
          </Heading>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi cum cumque quae beatae, quod quasi magnam, maiores reprehenderit et sunt nisi, doloribus quas minima quisquam. Unde hic similique porro.</p>
          <div>
            <Button color="primary">More Informations</Button>
          </div>
        </div>

        <div>
          <video src={aboutVideo} width="100%" autoPlay loop></video>
        </div>
      </Grid>
    </Section>

    {/* FAQ  */}
    <Section inverted>
      <Heading>
        <h2>FAQ</h2>
        <AccordionGroup>
          <Accordion title="How to renew my driver license?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit cum possimus officiis totam aperiam quibusdam eveniet rem omnis numquam, delectus qui repellat, facilis quasi corporis impedit doloremque explicabo, consequatur sunt.
          </Accordion>
          <Accordion title="How do I change my license category?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit cum possimus officiis totam aperiam quibusdam eveniet rem omnis numquam, delectus qui repellat, facilis quasi corporis impedit doloremque explicabo, consequatur sunt.
          </Accordion>
          <Accordion title="What can I do with my traffic ticket?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit cum possimus officiis totam aperiam quibusdam eveniet rem omnis numquam, delectus qui repellat, facilis quasi corporis impedit doloremque explicabo, consequatur sunt.
          </Accordion>
        </AccordionGroup>
      </Heading>
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {}

// Home.propTypes = {}

export default Home;
