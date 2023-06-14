import { ENV, authFetch } from "@/utils";

export class User {
    async getMe() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;

            const response = await authFetch(url);
            const result = await response.json();

            if(response.status !== 200) throw result;

            return result;
            } catch (error) {
                throw error;
            }
    }

    async updateMe(userId, data) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}/${userId}`;

            const pararms = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };

            const response = await authFetch(url, pararms);
            const result = await response.json();

            if(response.status !== 200) throw result;
            
        } catch (error) {
            throw error;
        }
    }
    
}