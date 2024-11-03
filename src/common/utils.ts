import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

let count = 1
export function getUniqueId(prefix: string) {
  return `${prefix}-${count++}`
}
const currentAppVersion = import.meta.env.APP_VERSION || "1.0.0"
export const macDownloadLink = `https://github.com/Simpletodo-app/simpletodo.app/releases/download/v${currentAppVersion}/Simpletodo-${currentAppVersion}-arm64.dmg`
