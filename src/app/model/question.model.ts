import { OptionModel } from "./option.model";

export class QuestionModel {
    questionId: string;
    examinationId: string;
    questionLabel: string;
    questionDescription: string;
    answerLabel: string;
    optionModelList: OptionModel[];

}