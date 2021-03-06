import { RequestBaseConfig } from './base'

export interface MvAllRequestConfig extends RequestBaseConfig {
  area?: string
  type?: string
  order?: string
  offset?: number
  limit?: number
}
