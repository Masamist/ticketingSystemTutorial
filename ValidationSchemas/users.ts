import {z} from "zod"

export const userSchema = z.object({
  name: z.string().min(3, "Name is required.").max(225),
  username: z.string().min(3, "Username is required.").max(225),
  password: z.string().min(6, "Password must be at leaset 6 characters.").max(255).optional().or(z.literal("")),
  role: z.string().min(3, "Role is required.").max(10),
})