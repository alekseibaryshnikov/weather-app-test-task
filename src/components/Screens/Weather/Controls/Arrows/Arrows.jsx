import React from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Container from '../../../../Common/Container/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function () {
    const styles = makeStyles({
        root: {
            '& > *': {
                margin: '0 100px'
            }
        }
    })();

    return <Container>
        <div className={styles.root}>
            <Button variant="contained" color="primary">
                <NavigateBeforeIcon />
            </Button>
            <Button variant="contained" color="primary">
                <NavigateNextIcon />
            </Button>
        </div>
    </Container>
}