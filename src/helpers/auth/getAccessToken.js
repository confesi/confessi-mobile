import * as SecureStore from 'expo-secure-store';
import { DOMAIN } from '../../constants/setup';


// Checks if there's a refresh token inside SecureStore, and if so, makes an API call to the server to get an access token
export default async function getAccessToken() {
    try {
        let refreshToken = await SecureStore.getItemAsync("refreshToken");
        if (!refreshToken) return {error: true, reason: "no token"};
        let response = await fetch(`${DOMAIN}/api/user/token`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                "token": refreshToken,
            }),
        });
        if (response.status == 200) {
            data = await (response.json());
            return {error: false, accessToken: data.accessToken};
        }
        return {error: true, reason: "invalid token"};
    } catch (error) {
        return {error: true, reason: "unknown"};
    }
    

    // if (response.status != 200) return "Incorrect/expired refresh token";
    return "test";
}



// can I switch "token" to token