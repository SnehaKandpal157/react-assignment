import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  FormControl,
  InputLabel
} from "@material-ui/core/";
import { Button } from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    textAlign: "left"
  },
  subheading: {
    fontSize: 14,
    fontWeight: 600,
    color: "#00a3ff",
    textAlign: "left"
  },
  subTitle: {
    fontWeight: 600,
    textAlign: "left"
  },
  row: {
    display: "flex",
    justifyContent: 'space-between',
    padding: 8
  },
  rowBody: {
    fontWeight: 600,
    color: "#7b7878",
    fontSize: 13
  },
  rowCircle: {
    background: "#ececec",
    borderRadius: 18,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7
  },
  bottomGrid: {
    display: "flex",
    justifyContent: "space-between"
  },
  selectWrap: {
    display: "flex",
    flexDirection: "column"
  },
  select: {
    height: 10
  },
  rowWrap: {
    display: "flex",
    padding: 10,
    justifyContent: "space-between",
    borderRadius: 14
  },
  cbcWrap: {
    display: "flex",
    flexWrap: "wrap",
  },
  cbcContent: {
    width: "46%",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    background: "#f0fafc",
    margin: 6,
    borderRadius: 5,
    fontWeight: 700,
    fontSize: 12,
    textAlign: "center"
  },
  firstCard:{
    display:"flex",
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: "center",
  },
  bullet:{
    height: 10,
    width: 10,
    background: "#0f86ec",
    marginRight: 15,
    borderRadius: 8,
  }

}));

export default function AltCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={8}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={4}>
          <Card>
            <CardHeader
              title="FINANCE MANAGER DEAL ASSIGNMENT"
              subheader="TODAYS DEAL"
              classes={{
                title: classes.title,
                subheader: classes.subheading
              }}
            />
            <CardContent>
              <Typography className={classes.subTitle} variant="subtitle2">
                Mike T.
              </Typography>
            </CardContent>
            <CardContent className={classes.firstCard}>
              <Typography className={classes.bullet}>
              </Typography>
              <Typography variant="subtitle2">
              Customer Name:
              </Typography>
              <Typography variant="subtitle2">
              Fred Beans
              </Typography>
            </CardContent>
            <CardContent className={classes.firstCard}>
              <Typography className={classes.bullet}>
              </Typography>
              <Typography variant="subtitle2">
              Salesperson:
              </Typography>
              <Typography variant="subtitle2">
              Henry Ford
              </Typography>
            </CardContent>

            <CardContent>
              <Typography className={classes.subTitle} variant="subtitle2">
                Bill J.
              </Typography>
            </CardContent>
            <CardContent className={classes.firstCard}>
              <Typography className={classes.bullet}>
              </Typography>
              <Typography variant="subtitle2">
              Customer Name:
              </Typography>
              <Typography variant="subtitle2">
              Joe Sample
              </Typography>
            </CardContent>
            <CardContent className={classes.firstCard}>
              <Typography className={classes.bullet}>
              </Typography>
              <Typography variant="subtitle2">
              Salesperson:
              </Typography>
              <Typography variant="subtitle2">
              Mark Stein
              </Typography>
            </CardContent>

            <CardContent>
              <Typography className={classes.subTitle} variant="subtitle2">
                Nick P.
              </Typography>
            </CardContent>
            <CardContent className={classes.firstCard}>
              <Typography className={classes.bullet}>
              </Typography>
              <Typography variant="subtitle2">
              Customer Name:
              </Typography>
              <Typography variant="subtitle2">
              Cheri Bridwell
              </Typography>
            </CardContent>
            <CardContent className={classes.firstCard}>
              <Typography className={classes.bullet}>
              </Typography>
              <Typography variant="subtitle2">
              Salesperson:
              </Typography>
              <Typography variant="subtitle2">
              Jill Harris
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardHeader
              title="LEAD ANALYTICS"
              subheader="CURRENT MONTH"
              classes={{
                title: classes.title,
                subheader: classes.subheading
              }}
            />
            <CardContent className={classes.row}>
              <Typography className={classes.rowBody} variant="body2">
                Deliveries
              </Typography>
              <Typography variant="button" className={classes.rowCircle}>
                25
              </Typography>
            </CardContent>

            <CardContent className={classes.row}>
              <Typography className={classes.rowBody} variant="body2">
                Pending
              </Typography>
              <Typography variant="button" className={classes.rowCircle}>
                12
              </Typography>
            </CardContent>

            <CardContent className={classes.row}>
              <Typography className={classes.rowBody} variant="body2">
                Walk-Ins
              </Typography>
              <Typography variant="button" className={classes.rowCircle}>
                65
              </Typography>
            </CardContent>

            <CardContent className={classes.row}>
              <Typography className={classes.rowBody} variant="body2">
                Web Leads
              </Typography>
              <Typography variant="button" className={classes.rowCircle}>
                15
              </Typography>
            </CardContent>

            <CardContent className={classes.row}>
              <Typography className={classes.rowBody} variant="body2">
                Services Leads
              </Typography>
              <Typography variant="button" className={classes.rowCircle}>
                5
              </Typography>
            </CardContent>

            <CardContent className={classes.row}>
              <Typography className={classes.rowBody} variant="body2">
                Other
              </Typography>
              <Typography variant="button" className={classes.rowCircle}>
                10
              </Typography>
            </CardContent>
            <Grid className={classes.bottomGrid}>
              <CardContent className={classes.footer}>
                <Typography variant="body2">
                  Total Ups
              </Typography>
                <Typography variant="h4">
                  95
              </Typography>
              </CardContent>
              <CardContent className={classes.footer}>
                <Typography variant="body2">
                  Total Delivered
              </Typography>
                <Typography variant="h4">
                  25
              </Typography>
              </CardContent>
              <CardContent className={classes.footer}>
                <Typography variant="body2">
                  Closing Ratio
              </Typography>
                <Typography variant="h4">
                  26
              </Typography>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardHeader
              title="LEAD ANALYTICS"
              subheader="JULY 2019"
              classes={{
                title: classes.title,
                subheader: classes.subheading
              }}
            />
            <CardContent className={classes.row}>
              <Typography className={classes.rowBody} variant="body2">
                Deliveries
              </Typography>
              <Typography variant="button" className={classes.rowCircle}>
                25
              </Typography>
            </CardContent>

            <CardContent className={classes.row}>
              <Typography className={classes.rowBody} variant="body2">
                Pending
              </Typography>
              <Typography variant="button" className={classes.rowCircle}>
                12
              </Typography>
            </CardContent>

            <CardContent className={classes.row}>
              <Typography className={classes.rowBody} variant="body2">
                Walk-Ins
              </Typography>
              <Typography variant="button" className={classes.rowCircle}>
                65
              </Typography>
            </CardContent>

            <CardContent className={classes.row}>
              <Typography className={classes.rowBody} variant="body2">
                Web Leads
              </Typography>
              <Typography variant="button" className={classes.rowCircle}>
                15
              </Typography>
            </CardContent>

            <CardContent className={classes.row}>
              <Typography className={classes.rowBody} variant="body2">
                Services Leads
              </Typography>
              <Typography variant="button" className={classes.rowCircle}>
                5
              </Typography>
            </CardContent>

            <CardContent className={classes.row}>
              <Typography className={classes.rowBody} variant="body2">
                Other
              </Typography>
              <Typography variant="button" className={classes.rowCircle}>
                10
              </Typography>
            </CardContent>


            <Grid className={classes.bottomGrid}>
              <CardContent className={classes.footer}>
                <Typography variant="body2">
                  Total Ups
              </Typography>
                <Typography variant="h4">
                  95
              </Typography>
              </CardContent>
              <CardContent className={classes.footer}>
                <Typography variant="body2">
                  Total Delivered
              </Typography>
                <Typography variant="h4">
                  25
              </Typography>
              </CardContent>
              <CardContent className={classes.footer}>
                <Typography variant="body2">
                  Closing Ratio
              </Typography>
                <Typography variant="h4">
                  26
              </Typography>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardHeader
              title="CBC REPORT"
              classes={{
                title: classes.title
              }}
            />
            <CardContent className={classes.cbcWrap}>
              <Typography className={classes.cbcContent} variant="subtitle2">
                CREDIT <br /> ACTIVITY
              </Typography>
              <Typography className={classes.cbcContent} variant="subtitle2">
                CREDIT <br /> SCORE
              </Typography>
              <Typography className={classes.cbcContent} variant="subtitle2">
                COMPLIANCE DETAILS
              </Typography>
              <Typography className={classes.cbcContent} variant="subtitle2">
                COMPLIANCE EXCEPTIONS
              </Typography>
              <Typography className={classes.cbcContent} variant="subtitle2">
                MLA LIST
              </Typography>
              <Typography className={classes.cbcContent} variant="subtitle2">
                RED FLAG COMPLIANCE
              </Typography>
              <Typography className={classes.cbcContent} variant="subtitle2">
                ZIP CODE ACTIVITY MAP
              </Typography>
              <Typography className={classes.cbcContent} variant="subtitle2">
                ADVERSE ACTION LETTERS
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardHeader
              title="CUSTOMER REPORT BUILDER"
              classes={{
                title: classes.title
              }}
            />
            <CardContent className={classes.selectWrap}>
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Dealership</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Employee Category</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Employee Category</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Employee</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Analysis Type</option>
                </Input>
              </FormGroup>
            </CardContent>
            <Button color="primary" className="report-button">Create Report</Button>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardHeader
              title="PENDING STIPS"
              classes={{
                title: classes.title
              }}
            />
            <CardContent className={classes.row}>
              <Typography className={classes.subheading} variant="caption">
                CUSTOMERS
              </Typography>
              <Typography className={classes.subheading} variant="caption">
                DATE SENT
              </Typography>
            </CardContent>

            <CardContent className={classes.rowWrap} style={{borderBottom:'1px solid silver'}}>
              <Typography variant="body2">
                Nick Pending
              </Typography>
              <Typography variant="body2">
                07-13-19
              </Typography>
            </CardContent>

            <CardContent className={classes.rowWrap} style={{borderBottom:'1px solid silver'}}>
              <Typography variant="body2">
                Mike Frost
              </Typography>
              <Typography variant="body2">
                07-13-19
              </Typography>
            </CardContent>

            <CardContent className={classes.rowWrap} style={{borderBottom:'1px solid silver'}}>
              <Typography variant="body2">
                Gus Gibbons
              </Typography>
              <Typography variant="body2">
                07-13-19
              </Typography>
            </CardContent>

            <CardContent className={classes.rowWrap} style={{borderBottom:'1px solid silver'}}>
              <Typography variant="body2">
                Adam Weiss
              </Typography>
              <Typography variant="body2">
                07-13-19
              </Typography>
            </CardContent>

            <CardContent className={classes.rowWrap} style={{borderBottom:'1px solid silver'}}>
              <Typography variant="body2">
                Eric Bloom
              </Typography>
              <Typography variant="body2">
                07-13-19
              </Typography>
            </CardContent>

            <CardContent className={classes.rowWrap} style={{borderBottom:'1px solid silver'}}>
              <Typography variant="body2">
                Jose Rivas
              </Typography>
              <Typography variant="body2">
                07-13-19
              </Typography>
            </CardContent>

            <CardContent className={classes.rowWrap} style={{borderBottom:'1px solid silver',marginBottom: '20px'}}>
              <Typography variant="body2">
                William Chang
              </Typography>
              <Typography variant="body2">
                07-13-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div >
  );
}
