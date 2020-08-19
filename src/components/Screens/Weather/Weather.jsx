import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function () {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return <div>
        <div>
            <FormControl component="fieldset">
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel
                        value="Celcius"
                        control={<Radio color="primary" checked={true} />}
                        label="Celcius"
                        labelPlacement="right"
                    />
                    <FormControlLabel
                        value="Fahrenheit"
                        control={<Radio color="primary" />}
                        label="Fahrenheit"
                        labelPlacement="right"
                    />
                </RadioGroup>
            </FormControl>
        </div>
        <div>
            <ArrowBackIosIcon />
            <ArrowForwardIosIcon />
        </div>
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
        </Typography>
                    <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
        </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        adjective
        </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
          <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
        <div>
            Chart
        </div>
    </div>
}