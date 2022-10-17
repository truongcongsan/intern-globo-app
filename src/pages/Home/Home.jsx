import { Page, Card, DataTable } from "@shopify/polaris";

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
            dataApi.type,
            dataApi.id,
            dataApi.name,
            dataApi.description,
            dataApi.status.toString(),
            moment(dataApi.createdAt).format("DD MMM YYYY"),
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
    <Page title="Recent Tasks">
      <Card>
        <DataTable
          columnContentTypes={[
            "text",
            "numeric",
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
            "Description",
            "Status",
            "Created At",
            "First Deliverable",
            "Closed",
          ]}
          rows={tasksApi}
        />
      </Card>
    </Page>
  );
}

export default Home;
