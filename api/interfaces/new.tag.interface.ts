import { Category } from ".";

export interface NewTag {
  id:          number;
  notice_id:   number;
  tag_id:      number;
  language_id: number | null;
  created_at:  Date;
  updated_at:  Date;
  tag:         Category;
}
