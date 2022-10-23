import {
  Columns,
  Page,
  SkeletonBodyText,
  SkeletonDisplayText,
} from "@shopify/polaris";
import React from "react";

function HomeSkeleton() {
  return (
    <>
      <div className="home-wrapper home-wrapper-bg">
        <div className="home-columns">
          <Columns
            columns={{ xs: 1, sm: 2, md: 2, lg: 3 }}
            spacing={{ xs: "2" }}
          >
            <div className="home-column-1">
              <div>
                <SkeletonBodyText />
              </div>
              <div style={{ padding: "15px 0" }}>
                <SkeletonBodyText />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{marginBottom: "20px"}}>
                <SkeletonDisplayText size="extraLarge" />
                </div>
                <SkeletonDisplayText size="extraLarge" />
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Columns>
        </div>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <Page title="Recent Tasks" fullWidth>
          <div className="table-sekeleton">
            <SkeletonDisplayText size="extraLarge" />
          </div>
          <SkeletonBodyText lines={10} />
        </Page>
      </div>
    </>
  );
}

export default HomeSkeleton;
