

export interface WeeklyAnalysisModelInterface {
  id: number;
  authorId?: number;
  statusId?: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  image?: string;
  translation?: any[];
  author?: any;
  status?: any;
  tags?: any[];
}
