import { useQuery } from "react-query";

import {
  FullHeightContent,
  Button,
  Avatar,
  Spacer,
  Heading,
} from "@glrodasz/components";

import tasks from "../features/planning/api";

function Start() {
  const { isLoading, error, data } = useQuery("todos", () => tasks.getAll());

  if (isLoading) return "Loading...";
  if (error) return `An error has ocurred ${error.message}`;

  console.log(data);
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
          <div>
            <Avatar src="https://placeimg.com/200/200/people" />
            <Spacer.Vertical size="xd" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Heading size="lg" color="primary">
                Hi, Christian
              </Heading>
              <Heading size="md" color="primary">
                How do you want to start?
              </Heading>
            </div>
          </div>
          <Heading size="lg">
            Now tell me, what is the first task you will work on today?
          </Heading>
          <button onClick={() => {}}>Tap to add the task</button>
          {data &&
            data.map((task) => {
              return (
                <div>
                  <Heading>{task.id}</Heading>
                  <Heading>{task.description}</Heading>
                </div>
              );
            })}
        </div>
      }
      footer={
        <div>
          <p>
            Basados en la matriz de Eisenhower priorizamos tus tareas evitando
            listas de pendientes saturadas.
          </p>
          <Button type="primary">Start now</Button>
        </div>
      }
    />
  );
}

export default Start;
