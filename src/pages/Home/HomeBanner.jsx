import { Columns, Text } from "@shopify/polaris";
import React from "react";

function HomeBanner() {
  return (
    <div className="home-wrapper">
      <div className="home-columns">
        <Columns columns={{ xs: 1, sm: 2, md: 2, lg: 3 }} spacing={{ xs: "2" }}>
          <div className="home-column-1">
            <div>
              <Text variant="heading2xl" as="h2">
                Hey Truong, welcome to CarsonDash!
              </Text>
            </div>
            <div style={{ padding: "15px 0" }}>
              <Text variant="bodyLg" as="p" color="subdued">
                Submit a new task, pick a task from the catalog or subscribe to
                submit unlimited tasks!
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
          <div></div>
          <div></div>
          <div></div>
        </Columns>
      </div>
    </div>
  );
}

export default HomeBanner;
