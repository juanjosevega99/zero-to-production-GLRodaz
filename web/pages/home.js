import { Spacer, Heading, Avatar, Card, Icon } from "@glrodasz/components";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex" }}>
        <Avatar src="https://placeimg.com/200/200/people" />
        <Spacer.Vertical size="xs" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Heading size="lg">Good morning, Christian</Heading>
          <Heading size="md" color="primary">
            How do you want to start?
          </Heading>
        </div>
      </div>
      <Spacer.Horizontal size="lg" />
    </div>
  );
}
