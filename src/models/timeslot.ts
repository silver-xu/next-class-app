export type Day =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";

export interface Timeslot {
    day: Day;
    hour: number;
    minutes: number;
    confirmationRequired: boolean;
}
