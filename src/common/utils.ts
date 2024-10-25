import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

let count = 1
export function getUniqueId(prefix: string) {
  return `${prefix}-${count++}`
}

export type OSTitle = "Mac" | "Windows" | "Linux (.DEB)" | "Linux (.RPM)"

type DownloadOption = {
  storeInfo?: {
    title: string;
    link: string
  },
  directDownloadLink: string;
  title: OSTitle;
}


export const macDownloadLink = "https://download.simpletodo.app"

export const downloadOptions: DownloadOption[] = [
  {
    title: "Mac",
    directDownloadLink: "https://mac",
    storeInfo: {
      title: "Mac App Store",
      link: "https://www.microsoft.com/en-us/p/edge/9nblggh4msrv"
    }
  },
  {
    title: "Windows",
    directDownloadLink: "https://windows",
    storeInfo: {
      title: "Microsoft Store",
      link: "https://www.microsoft.com/en-us/p/edge/9nblggh4msrv"
    }
  },
  {
    title: "Linux (.DEB)",
    directDownloadLink: "https://linux-1",
  },
  {
    title: "Linux (.RPM)",
    directDownloadLink: "https://linux-2",
  },

]