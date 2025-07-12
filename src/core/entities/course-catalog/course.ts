import { BaseEntity } from '../base'
import { EntityValidationError } from '../errors/entity-validation-internal-error'
import { Url } from '../value-objects/url'
import { VideoLesson } from './video-lesson'

export interface CourseProps {
  name: string
  description: string
  videoLessons: VideoLesson[]
  tagIds: string[]
  thumbnail: Url
}

export class Course extends BaseEntity<CourseProps> {
  private constructor(props: CourseProps) {
    super(props)
  }

  static create(props: CourseProps): Course {
    this.validateDescriptionLength(props.description)

    return new Course(props)
  }

  private static validateDescriptionLength(description: string): void {
    if (description.length < 100) {
      throw new EntityValidationError('description is too short')
    }

    if (description.length > 2000) {
      throw new EntityValidationError('description is too long')
    }
  }
}
