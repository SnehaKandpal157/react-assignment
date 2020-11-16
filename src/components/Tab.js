import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TableComponent from "./Table";

const TabComponent = () => (
  <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>PROSPECTS</Tab>
      <Tab>WEBSITE</Tab>
      <Tab>APPOINTMENTS</Tab>

    </TabList>

    <TabPanel>
      <TableComponent />
    </TabPanel>
    <TabPanel>
    <TableComponent />
    </TabPanel>
    <TabPanel>
    <TableComponent />
    </TabPanel>
    <TabPanel>
    <TableComponent />
    </TabPanel>
  </Tabs>
);

export default TabComponent;