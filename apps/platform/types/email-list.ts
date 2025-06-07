import { TODO } from "@/types/utility.types";

interface EmailList {
  name?: string;
  email: string;
  meta?: Record<string, TODO>;
}

type TEmailList = EmailList[];

export interface IEmailList {
  listName: string;
  emailsData: TEmailList;
}

export interface IEmailListDataResponse {
  id: string;
  createdAt: string;
  name: string;
  emails: EmailList[];
}
