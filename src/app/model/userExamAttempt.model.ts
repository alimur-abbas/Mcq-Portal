import { ExamType } from "./examType.model";

export class UserExamAttempt {
    attemptId: string;
    startedAt: Number;
    endAt: Number;
    examId: string;
    accountId: string;
    examType: ExamType;

}