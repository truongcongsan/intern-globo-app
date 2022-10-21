import { Navigation } from "@shopify/polaris";
import {
  HomeMinor,
  NoteMinor,
  InviteMinor,
  ToggleMinor,
  StatusActiveMajor,
  CirclePlusOutlineMinor,
  ArchiveMinor,
  OrdersMinor,
  GiftCardMinor,
  CustomerPlusMajor,
  QuestionMarkInverseMinor,
  SettingsMajor,
} from "@shopify/polaris-icons";

import { useLocation } from "react-router-dom";

import React from "react";

function NavigationMarkup() {
  const location = useLocation();
  return (
    <Navigation location={location.pathname}>
      <Navigation.Section
        items={[
          {
            url: "/home",
            label: "Home",
            icon: HomeMinor,
          },
          {
            url: "/task",
            label: "Task Catalog",
            icon: NoteMinor,
            badge: "46",
          },
        ]}
      />
      <div className="nav-my-projects">
        <Navigation.Section
          title="MY PROJECTS"
          items={[
            {
              url: "/active",
              label: "Active",
              icon: ToggleMinor,
              badge: "12",
            },
            {
              url: "/completed",
              label: "Completed",
              icon: StatusActiveMajor,
            },
            {
              url: "/closed",
              label: "Closed",
              icon: ArchiveMinor,
            },
          ]}
          action={{
            accessibilityLabel: "Add my projects",
            icon: CirclePlusOutlineMinor,
            onClick: () => {},
          }}
        />
      </div>
      <div className="nav-my-plan">
        <Navigation.Section
          title="MY PLAN"
          items={[
            {
              url: "/subscribe",
              label: "Subscribe",
              icon: OrdersMinor,
              badge: "Sale 40%",
            },
          ]}
        />
      </div>
      <div className="nav-more">
        <Navigation.Section
          title="MORE"
          items={[
            {
              url: "/member",
              label: "Member Peaks",
              icon: GiftCardMinor,
            },
            {
              url: "/invite",
              label: "Invite Friends",
              icon: CustomerPlusMajor,
              badge: "Earn $10",
            },
            {
              url: "/contact",
              label: "Contact Us",
              icon: InviteMinor,
            },
            {
              url: "/faq",
              label: "FAQ",
              icon: QuestionMarkInverseMinor,
            },
          ]}
        />
      </div>
      <div className="nav-settings">
        <Navigation.Section
          items={[
            {
              url: "/settings",
              label: "Settings",
              icon: SettingsMajor,
            },
          ]}
        />
      </div>
    </Navigation>
  );
}

export default NavigationMarkup;
