import { useState } from "react";

import {
  Heading,
  Input,
  Button,
  Spacer,
  CenteredContent,
} from "@glrodasz/components";

export default function Home() {
  const [formValues, setFormValues] = useState({});

  const onChange = (key) => (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, [key]: value });
  };

  return (
    <CenteredContent>
      <Heading size="xl">Tell me about you</Heading>
      <Spacer.Horizontal size="md" />
      <Input
        value={formValues.name}
        onChange={onChange("name")}
        placeholder="Name"
      />
      <Spacer.Horizontal size="sm" />
      <Input
        value={formValues.lastname}
        onChange={onChange("lastname")}
        placeholder="LastName"
      />
      <Spacer.Horizontal size="sm" />
      <Input
        value={formValues.email}
        onChange={onChange("email")}
        placeholder="Email"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Spacer.Horizontal size="lg" />

        <Button type="primary">Complete your profile</Button>
        <Spacer.Horizontal size="md" />
        <Button style={{}} type="tertiary">
          Skip this step for now
        </Button>
      </div>
    </CenteredContent>
  );
}
