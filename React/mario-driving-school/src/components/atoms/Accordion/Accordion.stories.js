import React from "react";
import Accordion from "./Accordion";
import { AccordionGroup } from 'components/molecules';

export default {
  title: "Components|Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="How to renew my driver license?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit cum possimus officiis totam aperiam quibusdam eveniet rem omnis numquam, delectus qui repellat, facilis quasi corporis impedit doloremque explicabo, consequatur sunt.
    </Accordion>
    <Accordion title="How do I change my license category?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit cum possimus officiis totam aperiam quibusdam eveniet rem omnis numquam, delectus qui repellat, facilis quasi corporis impedit doloremque explicabo, consequatur sunt.
    </Accordion>
    <Accordion title="What can I do with my traffic ticket?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit cum possimus officiis totam aperiam quibusdam eveniet rem omnis numquam, delectus qui repellat, facilis quasi corporis impedit doloremque explicabo, consequatur sunt.
    </Accordion>
  </>
);



