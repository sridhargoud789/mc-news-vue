import type { NuxtAxiosInstance } from '@nuxtjs/axios';
import { LevelResponseInterface } from '~/api/interfaces/level.response.interface';
import { LevelsResponseInterface } from '~/api/interfaces/levels.response.interface';
import { LevelModel } from '~/models/level.model';

export class LevelsService {
  $api: NuxtAxiosInstance;

  constructor(api: any) {
    this.$api = api
  }

  getLevelsList = async (): Promise<LevelModel[] | undefined> => {
    const resource: string = 'levels';
    try {
      const response = await this.$api
        .get<LevelsResponseInterface>(`${resource}`)
        .then((response) => response.data)
        .catch((error) => {
          console.error(
            'The error occurred: ' +
              error +
              'when the resource was called: ' +
              resource
          )
          return null
        });
      if (response === null) return [];
      if (response.levels == null ) return [];
      const levelsList = response!.levels ?? [];
      const levels: LevelModel[] | undefined = levelsList.map((level: LevelResponseInterface) => new LevelModel({
        id: level.id,
        code: level.code,
        name: level.name,
        createdAt: level.created_at,
        updatedAt: level.updated_at,
        deletedAt: level.deleted_at,
      }));
      return levels;
    } catch (error) {
      console.log(error)
    }
  }
}
