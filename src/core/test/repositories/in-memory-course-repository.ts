import { Course } from '@src/core/entities/course-catalog/course'
import { CourseRepository } from '@src/core/repositories/CourseRepository'

export class InMemoryCourseRepository implements CourseRepository {
  public courses: Course[] = []

  async create(course: Course): Promise<void> {
    await Promise.resolve(this.courses.push(course))
  }
}
