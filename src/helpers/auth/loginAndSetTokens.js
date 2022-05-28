import * as SecureStore from 'expo-secure-store';
import { DOMAIN } from '../../constants/setup';
import { setAccessToken } from "../../redux/slices/tokenSlice";

// logs in user with username and password, then sets tokens (accessToken to redux, refreshToken to SecureStore). Returns either success or failure
export default async function loginAndSetTokens(username, password, dispatch) {
    try {
        let response = await fetch(`${DOMAIN}/api/user/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
            }),
        });
        if (response.status == 200) {
            data = await (response.json());
            await SecureStore.setItemAsync("refreshToken", data.refreshToken);
            dispatch(setAccessToken(data.accessToken));
            return {error: false}
        }
        return {error: true, reason: "rejected by server"};
    } catch (error) {
        return {error: true, reason: "unknown"};
    }
}