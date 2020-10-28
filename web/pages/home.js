import {
  Spacer,
  Heading,
  Avatar,
  Card,
  Icon,
  CenteredContent,
} from "@glrodasz/components";

export default function Home() {
  return (
    <CenteredContent>
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
      <Card color="secondary" size="lg">
        Find a space to work
      </Card>
      <Spacer.Horizontal size="md" />
      <Card color="primary" size="lg">
        Start a productivity session
      </Card>
      <Spacer.Horizontal size="lg" />
      <Card size="sm">
        <Icon type="angleDown" hasBackground />
        <Spacer.Vertical size="xs" />
        <span>Maria has checked in at Factoria</span>
      </Card>
      <Spacer.Horizontal size="xs" />
      <Card size="sm">
        <Icon type="angleDown" hasBackground />
        <Spacer.Vertical size="xs" />
        <span>Maria has checked in at Factoria</span>
      </Card>
      <Spacer.Horizontal size="xs" />
      <Card size="sm">
        <Icon type="angleDown" hasBackground />
        <Spacer.Vertical size="xs" />
        <Heading size="sm" weight="normal">
          Maria has checked in at Factoria
        </Heading>
      </Card>
    </CenteredContent>
  );
}
