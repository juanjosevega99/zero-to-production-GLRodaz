import { useQuery, useQueryCache, useMutation } from "react-query";

import {
  FullHeightContent,
  Button,
  Avatar,
  Spacer,
  Heading,
  Paragraph,
  AddButton,
  Card,
  Icon,
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
        <>
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
              <Heading size="lg">HI, Juan</Heading>
              <Paragraph size="lg">Know the methodology RETO</Paragraph>
            </div>
          </div>
          <Spacer.Horizontal size="lg" />
          <Heading size="lg">
            Now tell me, what is the first task you will work on today?
          </Heading>
          <Spacer.Horizontal size="md" />
          {data &&
            data.map((task) => {
              return (
                <Card key={task.id}>
                  <Spacer.Vertical size="sm" />
                  <Paragraph weight="medium">{task.description}</Paragraph>
                  <Spacer.Vertical size="sm" />
                  <Icon
                    name="arrowRight"
                    size="sm"
                    onClick={() => deleteTask({ id: task.id })}
                    background="inverted"
                  />
                </Card>
              );
            })}
          <Spacer.Horizontal size="md" />
          <AddButton onAdd={(value) => addTask({ description: value })}>
            Tap to add the task
          </AddButton>
        </>
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
