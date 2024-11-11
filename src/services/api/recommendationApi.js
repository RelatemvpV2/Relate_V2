import recommendationApiService from "../recommendationService";


export const getRecommendationsForAssessment = async (assessmentId) => {
    try {
        const response = await recommendationApiService.get("/test/AssessmentID/" + assessmentId + "?recommendation=true");
        return response;
    } catch (error) {
        return {};
    }
}