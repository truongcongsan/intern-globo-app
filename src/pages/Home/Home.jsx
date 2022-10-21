import {
  Page,
  Card,
  DataTable,
  Columns,
  Text,
  TextStyle,
  Badge,
} from "@shopify/polaris";

import React, { useEffect, useState } from "react";
// import { useStore } from "../../store";
import axios from "axios";

import moment from "moment/moment";
// import _ from 'lodash'

function Home() {
  // const [state, dispatch] = useStore();
  const [tasksApi, setTasksApi] = useState([]);

  const fetchApi = () => {
    axios
      .get(
        "https://6294640ba7203b3ed067f742.mockapi.io/api/shopify/tasks?page=1&limit=5"
      )
      .then((res) => {
        const convertedData = [];
        // res.data.map((item) => _.values(item))

        for (let dataApi of res.data) {
          let tempArray = [
            <div className="table-type">
              <Badge>
                <div style={{ color: "#00a0ac" }}>{dataApi.type}</div>
              </Badge>
            </div>,
            <TextStyle variation="strong">#{dataApi.id}</TextStyle>,
            <>
              <div style={{ color: "#00a0ac" }}>
                <TextStyle variation="strong">{dataApi.name}</TextStyle>
              </div>

              <div style={{ color: "rgba(0,0,0,0.5)", fontWeight: "500" }}>
                {dataApi.description}
              </div>
            </>,

            dataApi.status ? (
              <Badge status="success" progress="complete">
                active
              </Badge>
            ) : (
              <Badge status="warning">cancelled</Badge>
            ),

            moment(dataApi.first_deliverable).format("DD MMM YYYY"),
            moment(dataApi.closed).format("DD MMM YYYY"),
          ];
          convertedData.push(tempArray);
        }
        setTasksApi(convertedData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div style={{ width: "100%", marginTop: "20px" }}>
        <div
          style={{ maxWidth: "62.375rem", padding: "1.5rem", margin: "0 auto" }}
        >
          <Columns
            columns={{ xs: 1, sm: "1fr 1fr", md: "1fr 1fr", lg: 2 }}
            spacing={{ xs: "2" }}
          >
            <div>
              <div>
                <Text variant="heading2xl" as="h2">
                  Hey Truong, welcome to CarsonDash!
                </Text>
              </div>
              <div style={{ padding: "15px 0" }}>
                <Text variant="bodyLg" as="p" color="subdued">
                  Submit a new task, pick a task from the catalog or subscribe
                  to submit unlimited tasks!
                </Text>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <button
                  className="home-btn"
                  style={{
                    background: "#fff",
                    border: "1px solid #aaa",
                    marginBottom: "15px",
                  }}
                >
                  Submit a new task
                </button>
                <button
                  className="home-btn"
                  style={{
                    background: "#586eca",
                    border: "1px solid #586eca",
                    color: "#fff",
                  }}
                >
                  Subscribe & Save
                </button>
              </div>
            </div>
            <div></div>
          </Columns>
        </div>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <Page title="Recent Tasks" fullWidth>
          <Card>
            <DataTable
              columnContentTypes={[
                "text",
                "text",
                "text",
                "text",
                "text",
                "text",
              ]}
              headings={[
                "Types",
                "Task ID",
                "Task Name",
                "Status",
                "First Deliverable",
                "Closed",
              ]}
              rows={tasksApi}
            />
          </Card>
        </Page>
      </div>
    </>
  );
}

export default Home;
