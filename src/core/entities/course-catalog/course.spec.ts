import { EntityValidationError } from '../errors/entity-validation-internal-error'
import { Url } from '../value-objects/url'
import { Course } from './course'

describe('Course Entity unit tests', () => {
  it('should throw an error when description is shorter than 100 characters', () => {
    expect(() => {
      Course.create({
        description: 'any description',
        name: 'any-name',
        tagIds: ['1', '2'],
        thumbnail: new Url('url.com'),
        videoLessons: [],
      })
    }).toThrowError(new EntityValidationError('description is too short'))
  })

  it('should throw an error when description is longer than 2000 characters', () => {
    const description = '9'.repeat(2001)

    expect(() => {
      Course.create({
        description,
        name: 'any-name',
        tagIds: ['1', '2'],
        thumbnail: new Url('url.com'),
        videoLessons: [],
      })
    }).toThrowError(new EntityValidationError('description is too long'))
  })

  it('should be able to create a course when description is between 100 and 2000 characters long', () => {
    const course = Course.create({
      description: '9'.repeat(500),
      name: 'any-name',
      tagIds: ['1', '2'],
      thumbnail: new Url('url.com'),
      videoLessons: [],
    })

    expect(course).toBeInstanceOf(Course)
    expect(course.props).toEqual(
      expect.objectContaining({
        description: '9'.repeat(500),
        name: 'any-name',
        tagIds: ['1', '2'],
        thumbnail: new Url('url.com'),
        videoLessons: [],
      }),
    )
  })
})
