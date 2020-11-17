import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { data } from '../constants';
import { Select, FormControl } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';

export default class App extends React.Component {
  render() {
    return (
      <div className="chart-wrap">
        <div className="chart-outer-wrap">
          <div className="chart-inner-wrap">
            <h3 className="heading">REPORT & ANALYTICS</h3>
            <FormControl>
              <Select
                native
                label="Date"
                style={{ marginBottom: "15px" }}
              >
                <option value={10}>07/31/2019</option>
              </Select>
            </FormControl>
            <Switch
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </div>
        </div>
        {
          data.map((eachState) => {
            return (
              <Doughnut
                data={eachState.state}
                options={{
                  legend: {
                    display: true,
                    position: 'right',
                    labels: {
                      fontSize: 80,
                      boxWidth: 20,
                      fontColor: "#000000",
                      usePointStyle: true,
                      boxWidth: 40
                    }
                  },
                  cutoutPercentage: 80,
                  elements: {
                    center: {
                      text: 'Red is 2/3 the total numbers',
                      color: '#FF6384', // Default is #000000
                      fontStyle: 'Arial', // Default is Arial
                      sidePadding: 20, // Default is 20 (as a percentage)
                      minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
                      lineHeight: 25 // Default is 25 (in px), used for when text wraps
                    }
                  }
                }}
              />
            )
          })
        }
      </div >
    );
  }
}