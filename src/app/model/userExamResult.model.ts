import { UserQuestionResult } from "./userQuestionResult.model";

export class UserExamResult {
    accountId: string;
    questionResults: UserQuestionResult[];
    score: Number;
    attemptId: string;
}