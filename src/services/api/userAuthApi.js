import userAuthApiService from "../userAuthService";

export const userToken = window.localStorage.getItem("token");

export const setUserToken = (key, token) => {
  window.localStorage.setItem(key, token);
}

export const deleteUserToken = () => {
  window.localStorage.removeItem("token");
}


export const registerUser = async (userData) => {
    try {
        const user = userAuthApiService.post("/test/register", userData);
        return user
    } catch (error) {
        // Handle the error here, log it, and return an empty array
        // console.error("Error writing review:", error);
        return {};
    }
};

export const userLogin = async (userData) => {
    try {
        const user = await userAuthApiService.post("/test/login", userData);
        return user
    } catch (error) {
        return {};
    }
};

export const adminLogin = async (adminData) => {
    try {
        const admin = await userAuthApiService.post("/test/admin-login", adminData);
        return admin;
    } catch (error) {
        return {};
    }
};

export const forgotPassword = async (data) => {
    try {
        const response = await userAuthApiService.post("/test/forgot-password", data);
        return response;
    } catch (error) {
        return {};
    }
};

export const resetPassword = async (data,token) => {
    try {
        const response = await userAuthApiService.post(`/test/reset-password?token=${token}`, data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const getUserById = async (data) => {
    try {
        const response = await userAuthApiService.get(`/test/get-users?user_id=${data}`);
        return response;
    } catch (error) {
        return {};
    }
}

export const updateInvitationStatus = async (data) => {
    try {
        const response = await userAuthApiService.post("/test/update-invite-status", data);
        return response;
    } catch (error) {
        return {};
    }
};

export const profileUpdate = async (data) => {
    try {
        const response = await userAuthApiService.post("/test/profile-update", data);
        return response;
    } catch (error) {
        return {};
    }
};

export const uploadProfilePic = async (data) => {
    try {
        const response = await userAuthApiService.post("/test/upload-picture", data);
        return response;
    } catch (error) {
        return {};
    }
};

export const getPartnerEmail = async () => {
    try {
        const response = await userAuthApiService.get(`/test/get-partner-email`);
        if(response && response.message=="No partner found.") {
            return null;
        }
        return response;
    } catch (error) {
        return {};
    }
}

export const getAssessmentStatus = async (data) => {
    try {
        const response = await userAuthApiService.get(`/test/get-assessment-status`);
        return response;
    } catch (error) {
        return {};
    }
}

export const sendInvite = async (data) => {
    try {
        const response = await userAuthApiService.post(`/test/send-invite`,data);
        
        return response;
    } catch(error) {
        console.error("Error sending invite:", error.response || error.message);
        return {};
    }
}