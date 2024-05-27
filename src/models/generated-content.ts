import { Course } from "./course";

export interface GeneratedContent {
    aboutUs?: string | undefined;
    courseDraft?: string | undefined;
    courses?: Course[] | undefined;
    freeTrialDraft?: string | undefined;
    freeTrialOffered?: boolean | undefined;
    email?: string | undefined;
}
