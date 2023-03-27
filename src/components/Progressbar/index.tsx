import React, { useEffect, useState } from "react";
import {
    progressbarWrapper,
    progressStyle
} from '../../assets/style/styles.css';

interface ProgressBarProps {
    width: number,
  }

const ProgressBar = (props: ProgressBarProps): JSX.Element => {
    const {width}=props
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(10 * width);
    });

    return (
        <div className={progressbarWrapper}>
            <div style={{ width: `${value}%` }} className={progressStyle} />
        </div>
    );
};

export default ProgressBar;