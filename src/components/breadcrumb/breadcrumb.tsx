import styles from "./breadcrumb.module.scss";

export interface BreadcrumbProps {
    text: string;
}

export const Breadcrumb = (props: BreadcrumbProps) => (
    <div className={styles.breadcrumbWrapper}>
        <div className={styles.breadcrumb}>{props.text}</div>
    </div>
);
