import {fetchUrl} from '../../utils/apiConfig';


export const loginApi = fetchUrl('login');

export const CHANGE_PASSWORD = fetchUrl('change-password');
export const NEW_REGSTER_PATIENT = fetchUrl('new-patient');
export const GET_EXISTING_PATIENT_DETAILS = fetchUrl('get-patient');
export const GENERATE_EMAIL = fetchUrl('generate-email-password');

export const UpdateFCMTokenApi = fetchUrl(`UpdateFCMToken`);
