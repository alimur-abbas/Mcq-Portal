import { QuestionModel } from "./question.model";

export class ExaminationModel {
    examinationId: string;
    examCode: string;
    examTitle: string;
    examDesc: string;
    examDate: string;
    examTime: string;
    examDuration: string;
    questionModelList: QuestionModel[];
}