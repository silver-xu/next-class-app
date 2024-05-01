"use client";

import {
    randEmail,
    randFullName,
    randNumber,
    randPhoneNumber,
} from "@ngneat/falso";
import { Button, Card, DatePicker, Divider, Modal, TimePicker } from "antd";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useState } from "react";
import dayjs from "dayjs";

import styles from "./manage-booking.module.scss";
import commonStyles from "../common.module.scss";

const name = randFullName();
dayjs.extend(localizedFormat);

export const ManageBooking = () => {
    const [updateSessionModalOpen, setUpdateSessionModalOpen] =
        useState<boolean>(false);
    const [updateSessionTimeModalOpen, setUpdateSessionTimeModalOpen] =
        useState<boolean>(false);
    const [cancelBookingModalOpen, setCancelBookingModalOpen] =
        useState<boolean>(false);

    const updateSessionTime = () => {
        setUpdateSessionModalOpen(false);
        setUpdateSessionTimeModalOpen(false);
    };

    const cancelBooking = () => {
        setCancelBookingModalOpen(false);
    };

    const session = (
        <>
            <h3>Session Time</h3>
            <span className={styles.sessionTime}>{dayjs().format("LLL")}</span>
            <p>
                Please contact {name} to discuss alternative session time before
                updating.
            </p>
            <Button
                type="primary"
                onClick={() => setUpdateSessionModalOpen(true)}
            >
                Update
            </Button>
        </>
    );

    return (
        <div className={`${commonStyles.content} ${styles.content}`}>
            <Card title={"Booking for " + name} className={styles.card}>
                <h1>Junior Speed Skating</h1>
                {session}
                <Divider />
                <h3>Student Information</h3>
                <div className={`${styles.info} ${styles.first}`}>
                    <span className={styles.name}>Student Name</span>
                    <span className={styles.value}>{name}</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.name}>Age</span>
                    <span className={styles.value}>
                        {randNumber({ min: 5, max: 10 }).toString()}
                    </span>
                </div>
                <div className={styles.info}>
                    <span className={styles.name}>Email</span>
                    <span className={styles.value}>{randEmail()}</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.name}>Mobile</span>
                    <span className={styles.value}>
                        {randPhoneNumber({ countryCode: "AU" })}
                    </span>
                </div>
                <Divider />
                <h3>Navigation Instructions</h3>
                <div>
                    <img src="/map.png" />
                    <p>
                        Head eastward, guided by the neon quill sign, until you
                        reach the grand fountain; then, take a right and follow
                        the cobblestone path, passing by a mural of philosophers
                        as inspiration. Finally, spot the door adorned with the
                        emblem of wisdom, and with confidence, step into
                        Classroom 101, where enlightenment eagerly awaits your
                        arrival.
                    </p>
                </div>
                <Divider />
                <p>
                    In extremely rare cases, the booking might need to be
                    canceled due to parents commitments or other arrangements.
                    Please do confirm with {name} before proceed to cancellation
                </p>
                <Button
                    type="primary"
                    onClick={() => setCancelBookingModalOpen(true)}
                >
                    Cancel Booking
                </Button>
            </Card>
            <Modal
                title="Confirm"
                open={updateSessionTimeModalOpen}
                onOk={updateSessionTime}
                onCancel={() => setUpdateSessionTimeModalOpen(false)}
            >
                <p>
                    Are you sure you would like to update Session Time for the
                    booking? Once proceed {name} will receive an email
                    highlighting the new session time.
                </p>
            </Modal>
            <Modal
                title="Confirm"
                open={cancelBookingModalOpen}
                onOk={cancelBooking}
                onCancel={() => setCancelBookingModalOpen(false)}
            >
                <p>
                    Are you sure you would like to cancel the booking? This
                    operation cannot be undone. Once proceed {name} will receive
                    an email highlighting the new session time.
                </p>
            </Modal>
            <Modal
                title="Update Session Time"
                open={updateSessionModalOpen}
                onOk={() => setUpdateSessionModalOpen(false)}
                onCancel={() => setUpdateSessionModalOpen(false)}
            >
                <p>
                    Once confirmed the {name} will receive an email highlighting
                    the new session time.
                </p>
                <div>
                    <DatePicker
                        needConfirm={true}
                        defaultValue={dayjs()}
                        className={styles.input}
                    />
                    &nbsp;
                    <TimePicker
                        minuteStep={15}
                        needConfirm={true}
                        defaultValue={dayjs()}
                        className={styles.input}
                        format={"hh:mm a"}
                    />
                </div>
            </Modal>
        </div>
    );
};
