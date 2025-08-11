import { VideoLesson } from '../entities/course-catalog/video-lesson'

export abstract class VideoLessonRepository {
  // abstract create(videolesson: VideoLesson): Promise<void>
  abstract findById(id: string): Promise<VideoLesson>
  // abstract update(videolesson: VideoLesson): Promise<void>
  // abstract deleteById(id: string): Promise<void>
}
