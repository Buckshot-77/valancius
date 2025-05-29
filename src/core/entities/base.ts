import { UniqueIdentifier } from './value-objects/unique-identifier'

export interface BaseEntityProps {
  createdAt: Date
  updatedAt: Date
}

export abstract class BaseEntity<CustomProps> {
  protected _id: UniqueIdentifier
  protected _baseProps: BaseEntityProps
  protected _customProps: CustomProps

  constructor(
    customProps: CustomProps,
    baseProps?: Partial<BaseEntityProps>,
    id?: UniqueIdentifier,
  ) {
    this._id = id ?? new UniqueIdentifier()

    const now = new Date()

    this._baseProps = {
      createdAt: baseProps?.createdAt ?? now,
      updatedAt: baseProps?.updatedAt ?? now,
    }

    this._customProps = customProps
  }

  get id() {
    return this._id.value
  }

  get createdAt() {
    return this._baseProps.createdAt
  }

  get updatedAt() {
    return this._baseProps.updatedAt
  }

  get props(): CustomProps & BaseEntityProps {
    const combinedProps = { ...this._baseProps, ...this._customProps }

    return combinedProps
  }

  touch() {
    this._baseProps.updatedAt = new Date()
  }
}
