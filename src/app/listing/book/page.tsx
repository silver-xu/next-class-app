import { BookingWizard } from "@/components/booking-wizard";
import Layout from "../../layout";

export const metadata = {
    title: "nextclass. | The interest of lifetime - Booking",
    description: "nextclass. | The interest of lifetime - Booking",
};

export default function Book() {
    return (
        <Layout>
            <BookingWizard />
        </Layout>
    );
}
