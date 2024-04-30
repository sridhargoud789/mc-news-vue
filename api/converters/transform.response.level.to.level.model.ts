import { LevelResponseInterface } from '../interfaces/level.response.interface';
import { LevelModel } from '../models/level.model';

export const transformResponseLevelToLevelModel = (level: LevelResponseInterface): any => new LevelModel({
  id: level.id,
  code: level.code,
  name: level.name,
  createdAt: level.created_at,
  updatedAt: level.updated_at,
  deletedAt: level.deleted_at,
});
