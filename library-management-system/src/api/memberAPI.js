import { deleteRequest, getRequest, putRequest, postrequest } from "./util";

const BASE_URL = "/member";

export const getMembers = () => getRequest(`${BASE_URL}`);

export const getMember = (id) => getRequest(`${BASE_URL}/${id}`);

export const deleteMember = (id) => deleteRequest(`${BASE_URL}/${id}`);

export const addMember = (data) => postrequest(`${BASE_URL}`, data);

export const editMember = (id,data) => putRequest(`${BASE_URL}/${id}`,data);

/*export const getMembers = () => [
   { id: "1", name: "Sandaruwan" }, { id: "2", name: "Lakshitha" }
];*/
