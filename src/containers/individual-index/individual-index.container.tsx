import "./individual-index.scss";

import React, { FunctionComponent } from "react";

import ChartSection from "components/sections/line-chart-section/line-chart-section.component";
import Container from "layouts/container";
import Default from "layouts/default.layout";
import Deposit from "components/sections/deposit/deposit.component";
import IndexStats from "components/sections/index-stats/index-stats.component";
import Table from "components/table/table.component";

const IndividualIndexContainer: FunctionComponent = () => (
  <Default navigation={{ account: "0x9E39...6D94", index: "DeFi" }}>
    <div className="individual-index-module">
      <Container>
        <IndexStats />
        <Deposit />
        <ChartSection />
        <Table title="Assets" />
      </Container>
    </div>
  </Default>
);

export default IndividualIndexContainer;