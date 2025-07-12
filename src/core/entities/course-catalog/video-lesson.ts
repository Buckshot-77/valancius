import { BaseEntity } from '../base'
import { Url } from '../value-objects/url'

export interface VideoLessonProps {
  name: string
  description: string
  videoUrl: Url
  thumbnail: Url
}

export class VideoLesson extends BaseEntity<VideoLessonProps> {
  constructor(props: VideoLessonProps) {
    super(props)
  }
}
