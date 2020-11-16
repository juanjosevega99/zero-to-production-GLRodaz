import { useMutation, useQuery, useQueryCache } from "react-query";

import {
  FullHeightContent,
  Button,
  Avatar,
  Spacer,
  Heading,
  Paragraph,
  AddButton,
} from "@glrodasz/components";

import tasks from "../features/planning/api";

export async function getStaticProps() {
  const initialTasks = await tasks.getAll();
  return { props: { initialTasks } };
}

function Planning(props) {
  const cache = useQueryCache();
  const { isLoading, error, data } = useQuery("tasks", () => tasks.getAll(), {
    initialData: props.initialTasks,
  });

  const [addTask] = useMutation((params) => tasks.create(params), {
    onSuccess: () => {
      // Query Invalidations
      cache.invalidateQueries("tasks");
    },
  });

  const [deleteTask] = useMutation((params) => tasks.delete(params), {
    onSuccess: () => {
      // Query Invalidations
      cache.invalidateQueries("tasks");
    },
  });

  if (isLoading) return "Loading...";
  if (error) return `An error has ocurred ${error.message}`;

  return (
    <FullHeightContent
      content={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex" }}>
            <Avatar src="https://placeimg.com/200/200/people" />
            <Spacer.Vertical size="xs" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Heading size="lg">HI, Christian</Heading>
              <Paragraph size="lg" weight="">
                Know the methodology RETO
              </Paragraph>
            </div>
          </div>
          <Spacer.Horizontal size="lg" />
          <Heading size="lg">
            Now tell me, what is the first task you will work on today?
          </Heading>
          <Spacer.Horizontal size="md" />
          {/* <AddButton onAdd={(value) => addTask({ description: value })}>
          <button onClick={() => addTask({ description: "New task" })}>
            Tap to add the task
          </AddButton> */}
          {data &&
            data.map((task) => {
              return (
                <div>
                  <Heading>{task.id}</Heading>
                  <Heading>{task.description}</Heading>
                  <button onClick={() => deleteTask({ id: task.id })}>X</button>
                </div>
              );
            })}
        </div>
      }
      footer={
        <div>
          <Paragraph size="sm">
            Based on the Eisenhower matrix we prioritize your tasks avoiding
            saturated to-do lists.
          </Paragraph>
          <Spacer.Horizontal size="sm" />
          <Button type="primary">Start now</Button>
        </div>
      }
    />
  );
}

export default Planning;
