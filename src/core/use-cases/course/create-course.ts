import { Course } from '@src/core/entities/course-catalog/course'
import { Url } from '@src/core/entities/value-objects/url'
import { CourseRepository } from '@src/core/repositories/CourseRepository'

export interface CreateCourseDTO {
  name: string
  description: string
  tagIds: string[]
  thumbnail_url: string
}

export class CreateCourse {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute({ name, description, tagIds, thumbnail_url }: CreateCourseDTO) {
    const thumbnail = new Url(thumbnail_url)

    const course = new Course({
      name,
      description,
      tagIds,
      thumbnail,
    })

    await this.courseRepository.create(course)
  }
}
