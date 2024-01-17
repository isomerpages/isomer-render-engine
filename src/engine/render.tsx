import React, { ReactElement } from "react";
import { Button, Footer, Hero, Infopic } from "@isomerpages/isomer-components";

interface IsomerComponent {
  id: string;
  order: number;
  props: any;
}

interface IsomerBaseSchema {
  id: string;
  layout: string;
  path: string;
  components: IsomerComponent[];
}

const RenderEngine = ({
  id,
  layout,
  path,
  components,
}: IsomerBaseSchema): ReactElement => {
  if (components && components.length > 0) {
    const collatedComponents = components.map(
      (component: IsomerComponent, idx: number) => {
        if (component.id === "Button") {
          return <Button label={component.props.label} />;
        }
        if (component.id === "Infopic") {
          return <Infopic {...component.props} key={idx} />;
        }
        if (component.id === "Footer") {
          return <Footer />;
        }
        if (component.id === "Hero") {
          return <Hero />;
        }
        return <div key={idx}>Component not found</div>;
      }
    );
    return <>{collatedComponents}</>;
  }
  return <h1>Hello World</h1>;
};

export default RenderEngine;
