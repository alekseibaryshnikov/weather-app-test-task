import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default function () {
    const styles = makeStyles({
        root: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& > div': {
                alignSelf: 'center'
            }
        }
    })();

    return <div className={styles.root}>
        <div>
            <CircularProgress />
        </div>
    </div>;
}