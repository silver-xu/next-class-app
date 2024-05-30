"use client";

import { Button } from "antd";

import styles from "./phoneButton.module.scss";
import { useState } from "react";

interface PhoneButtonProps {
    phoneNumber: string;
    type: "primary" | "default";
}

export const PhoneButton = (props: PhoneButtonProps) => {
    const { type } = props;

    const phoneNumber = props.phoneNumber.replace(/\s/g, "");
    const userFriendlyPhoneNumber = phoneNumber.startsWith("04")
        ? phoneNumber.substring(0, 4) +
          " " +
          phoneNumber.substring(4, 7) +
          " " +
          phoneNumber.substring(7)
        : phoneNumber.substring(0, 2) +
          " " +
          phoneNumber.substring(2, 6) +
          " " +
          phoneNumber.substring(7);

    const maskedPhoneNumber = phoneNumber.startsWith("04")
        ? phoneNumber.substring(0, 4) +
          " " +
          phoneNumber.substring(4, 7) +
          " ****"
        : phoneNumber.substring(0, 2) +
          " " +
          phoneNumber.substring(2, 6) +
          " ****";

    const [masked, setMasked] = useState(true);

    return (
        <Button
            type={type}
            size="large"
            className={type === "primary" ? styles.primary : styles.default}
            onClick={() => setMasked(!masked)}
        >
            {masked ? maskedPhoneNumber : userFriendlyPhoneNumber}
        </Button>
    );
};
