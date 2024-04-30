import type { NuxtAxiosInstance } from '@nuxtjs/axios';
import { TrendingTopicsResponseInterface } from '../api/interfaces/trending.topics.response.interface';
import { TopicResponseInterface } from '../api/interfaces/topic.response.interface';
import { TopicModel } from '~/models/topic.model'

export class TrendingTopicsService {
  $api: NuxtAxiosInstance;

  constructor(api: any) {
    this.$api = api
  }

  getListTrendingTopics = async (): Promise<TopicModel[] | undefined> => {
    const resource: string = 'trendingtopics';
    try {
      const response = await this.$api
        .get<TrendingTopicsResponseInterface>(`${resource}`)
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
        if ( response === null ) return [];
        if ( response.trendingtopics === null ) return [];
        const trendingTopics = response.trendingtopics;
        const trendingTopicsList: TopicModel[] | undefined = trendingTopics.map( ( topic: TopicResponseInterface ) => new TopicModel({
          id: topic.id,
          name: topic.name,
          url: topic.url,
          createdAt: topic.created_at,
          updatedAt: topic.updated_at,
          deletedAt: topic.deleted_at,
        }) );
        return trendingTopicsList;
    } catch (error) {
      console.log(error)
    }
  }
}
