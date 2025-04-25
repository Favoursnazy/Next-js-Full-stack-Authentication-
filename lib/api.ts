import API from "./axios-client";

type LoginType = {
  email: string;
  password: string;
};

type RegisterType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type ForgotPasswordType = {
  email: string;
};

type ResetPasswordType = {
  password: string;
  verificationCode: string;
};

type VeriyEmailType = {
  code: string;
};

export type mfaType = {
  message: string;
  secret: string;
  qrImageUrl: string;
};

type verifyMFAType = {
  code: string;
  secretKey: string;
};

type mfaLoginType = {
  code: string;
  email: string;
};
type SessionType = {
  _id: string;
  userId: string;
  userAgent: string;
  expiresAt: string;
  isCurrent?: boolean;
  createdAt: string;
};

type SessionResponseType = {
  message: string;
  sessions: SessionType[];
};

export const loginMutation = async (data: LoginType) => {
  return await API.post("/auth/login", data);
};

export const registerMutation = async (data: RegisterType) => {
  return await API.post("/auth/register", data);
};

export const forgotPasswordMutationFn = async (data: ForgotPasswordType) => {
  return await API.post("/auth/password/forgot", data);
};

export const resetPasswordMutationFn = async (data: ResetPasswordType) => {
  return await API.post("/auth/password/reset", data);
};

export const verifyEmailMutationFn = async (data: VeriyEmailType) => {
  return await API.post("/auth/verify/email", data);
};

export const getUserSessionQueryFn = async () =>
  API.get("/session/current-session");

export const mfaSetupQueryn = async () => {
  const response = await API.get<mfaType>("/mfa/setup");
  return response.data;
};

export const verifyMFAMutationFn = async (data: verifyMFAType) => {
  return await API.post("/mfa/verify", data);
};

export const revokeMFAMutationFn = async () => await API.put("/mfa/revoke", {});

export const verifyMfaForLoginMutationFn = async (data: mfaLoginType) => {
  return await API.post("/mfa/verify-login", data);
};

export const sessionQueryFn = async () => {
  const response = await API.get<SessionResponseType>("/session/all");
  return response.data;
};

export const deleteSessionMutationFn = async (id: string) =>
  await API.delete(`/session/${id}`);

export const logoutMutationFn = async () => API.get("/auth/logout");
