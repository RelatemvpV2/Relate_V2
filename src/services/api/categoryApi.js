import categoryApiService from "../categoryService";

export const addCategory = async (data) => {
    try {
        const response = await categoryApiService.post("/test/category", data);
        return response;
    } catch (error) {
        return {};
    }
};

export const editCategory = async (categoryId, data) => {
    try {
        const response = await categoryApiService.post("/test/edit-category/" + categoryId, data);
        return response;
    } catch (error) {
        return {};
    }
};

export const getCategoryById = async (categoryId) => {
    try {
        const response = await categoryApiService.get("/test/category/" + categoryId);
        return response;
    } catch (error) {
        return {};
    }
}

export const addQuestionToCategory = async (categoryId, data) => {
    try {
        const response = await categoryApiService.post("/test/category/" + categoryId + "question", data);
        return response;
    } catch (error) {
        return {};
    }
};

export const editQuestion = async (categoryId, questionId, data) => {
    try {
        const response = await categoryApiService.post("/test/category/" + categoryId + "question" + questionId, data);
        return response;
    } catch (error) {
        return {};
    }
};


export const addOptionToQuestion = async (categoryId, questionId, data) => {
    try {
        const response = await categoryApiService.post("/test/category/" + categoryId + "question" + questionId + "/option", data);
        return response;
    } catch (error) {
        return {};
    }
};

export const getAllCategories = async () => {    
    try {
        const response = await categoryApiService.get(`/test/categories`);
        return response;
    } catch (error) {
        return {};
    }
}

export const getAllSubCategories = async (categoryId) => {

    try {
        const response = await categoryApiService.get(`/test/parent/` + categoryId);
        return response;
    } catch (error) {
        return {};
    }
}