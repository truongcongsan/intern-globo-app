import { Page, Card, DataTable, TextStyle, Badge } from "@shopify/polaris";

import React, { useEffect, useState } from "react";
// import { useStore } from "../../store";
import axios from "axios";

import moment from "moment/moment";
import HomeBanner from "./HomeBanner";
import HomeSkeleton from "./HomeSkeleton";
// import _ from 'lodash'

function Home() {
  // const [state, dispatch] = useStore();

  const [showSkeleton, setShowSkeleton] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(!showSkeleton);
    }, 1500);
  }, []);

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

  if (showSkeleton) {
    return <HomeSkeleton />;
  } else {
    return (
      <>
        <HomeBanner />
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
}

export default Home;
