import answerApiService from "../answerService";

export const saveAnswer = async (assessmentId, categoryId, questionId, data) => {
    try {
        const response = await answerApiService.post("/test/AssessmentID/" + assessmentId + "/categoryID/" + categoryId + "/QuestionID/" + questionId, data);
        return response;
    } catch (error) {
        return {};
    }
};

export const getAssessmentAnswerByQuestion = async (assessmentId, categoryId, questionId, data) => {
    try {
        const response = await answerApiService.post("/test/AssessmentID/" + assessmentId + "/categoryID/" + categoryId + "/QuestionID/" + questionId, data);
        return response;
    } catch (error) {
        return {};
    }
}

export const getAllAssessmentAnswers = async (assessmentId) => {
    try {
        const response = await answerApiService.get("/test/AssessmentID/" + assessmentId );
        return response;
    } catch (error) {
        return {};
    }
}

export const getAnswersForAssessmentAndCategory = async (assessmentId, categoryId) => {
    try {
        const response = await answerApiService.get("/test/AssessmentID/" + assessmentId + "/categoryID/" + categoryId);
        return response;
    } catch (error) {
        return {};
    }
}

export const getAssessmentSummary = async (assessmentId) => {
    try {
        const response = await answerApiService.get("/test/AssessmentID/" + assessmentId + "?summary=true");
        return response?.rankedCategories;
    } catch (error) {
        return {};
    }
}

export const getAnswersGroupByAssessment = async (assessmentId) => {
    try {
        const response = await answerApiService.get("/test/AssessmentID/" + assessmentId + "?grouped=true");
        return response;
    } catch (error) {
        return {};
    }
}