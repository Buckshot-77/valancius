import { VideoLesson } from '@src/core/entities/course-catalog/video-lesson'
import { VideoLessonRepository } from '@src/core/repositories/VideoLessonRepository'

export class InMemoryVideoLessonRepository implements VideoLessonRepository {
  public videoLessons: VideoLesson[] = []

  async findById(id: string): Promise<VideoLesson> {}
}
