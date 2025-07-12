import { BaseEntity } from '../base'

export interface TagProps {
  name: string
}

export class Tag extends BaseEntity<TagProps> {
  constructor(props: TagProps) {
    super(props)
  }

  get name(): string {
    return this._customProps.name
  }

  set name(nameParam: string) {
    this._customProps.name = nameParam
  }
}
