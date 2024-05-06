import NextAuth, { DefaultSesion} from "next-auth/next"
import { JWT} from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
      role:string;
    } & DefaultSesion["user"]
  }
  interface User {
    id: number;
    name: string;
    username: string;
    role: Role;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    role?: string
  }
}