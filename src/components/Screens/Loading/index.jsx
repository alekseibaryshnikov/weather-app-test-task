import React from 'react';
import { CircularProgress } from '@material-ui/core';


import style from './style.module.css';

export default function () {
    return <div className={style.component}>
        <div>
            <CircularProgress />
        </div>
    </div>;
}