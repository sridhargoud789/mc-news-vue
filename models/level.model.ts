import { LevelModelInterface } from "~/interfaces/level.model.interface";

export class LevelModel {
  public id: number;
  public code?: string;
  public name?: string;
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: string;

  // Declare constructor
  constructor ({
    id,
    code,
    name,
    createdAt,
    updatedAt,
    deletedAt,
  }: LevelModelInterface) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
