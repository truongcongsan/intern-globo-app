import {
  Card,
  Page,
  SkeletonBodyText,
  TextContainer,
  SkeletonDisplayText,
} from "@shopify/polaris";
import React from "react";

function ContactSkeleton() {
  return (
    <Page title="Contact" fullWidth>
      <Card>
        <Card.Section>
          <SkeletonBodyText />
        </Card.Section>

        <Card.Section>
          <TextContainer>
            <SkeletonDisplayText size="small" />
            <SkeletonBodyText lines={1} />
            <SkeletonDisplayText size="small" />
            <SkeletonBodyText lines={1} />
            <SkeletonDisplayText size="small" />
            <SkeletonBodyText lines={4} />
          </TextContainer>
        </Card.Section>

        <Card.Section>
          <SkeletonDisplayText size="small" />
        </Card.Section>
      </Card>
    </Page>
  );
}

export default ContactSkeleton;
