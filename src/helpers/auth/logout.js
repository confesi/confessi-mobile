import * as SecureStore from 'expo-secure-store';
import { DOMAIN } from '../../constants/setup';
import { setAccessToken } from "../../redux/slices/tokenSlice";


export default async function logout(dispatch) {
    let refreshToken = await SecureStore.getItemAsync("refreshToken");
    dispatch(setAccessToken(null));
    await SecureStore.setItemAsync("refreshToken", "");
    if (!refreshToken) return {error: true, reason: "no token"};
    try {
        if (!refreshToken) return {error: true, reason: "no token"};
        let response = await fetch(`${DOMAIN}/api/user/logout`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                "token": refreshToken,
            }),
        });
        if (response.status == 200) { // true
            return {error: false};
        }
        return {error: true, reason: "invalid token"};
    } catch (error) {
        return {error: true, reason: "unknown"};
    }
}