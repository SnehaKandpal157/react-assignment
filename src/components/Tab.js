import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TableComponent from "./Table";

const TabComponent = (props) => (
  <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>PROSPECTS</Tab>
      <Tab>WEBSITE</Tab>
      <Tab>APPOINTMENTS</Tab>

    </TabList>

    <TabPanel>
      <TableComponent {...props}/>
    </TabPanel>
    <TabPanel>
    <TableComponent {...props}/>
    </TabPanel>
    <TabPanel>
    <TableComponent {...props}/>
    </TabPanel>
    <TabPanel>
    <TableComponent {...props}/>
    </TabPanel>
  </Tabs>
);

export default TabComponent;