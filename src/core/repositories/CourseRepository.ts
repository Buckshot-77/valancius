import { Course } from '../entities/course-catalog/course'

export abstract class CourseRepository {
  abstract create(course: Course): Promise<void>
  // abstract findById(id: string): Promise<Course>
  // abstract update(course: Course): Promise<void>
  // abstract deleteById(id: string): Promise<void>
}
