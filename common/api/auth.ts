import { POST } from '@common/httpClient';
import { YN } from '@common/constant';

export interface SignUpRequestDto {
  email: string;
  password: string;
  username: string;
  phone?: string;
  smsYn: YN;
  facebookHref?: string;
  instagramHref?: string;
  individualHref?: string;
}

export function SignUp(dto: SignUpRequestDto) {
  return POST<{ data: boolean }>(`/auth/signup`, dto);
}

export interface SignInRequestDto {
  email: string;
  password: string;
}

export function SignIn(dto: SignInRequestDto) {
  return POST<{ access_token: string }>(`/auth/signin`, dto);
}
