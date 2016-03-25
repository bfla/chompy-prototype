@Chomps = new Mongo.Collection('chomps')

_schema = new SimpleSchema
  description:
    type: String
    optional: true
  geo:
    type: Object
    optional: true
  img:
    type: String
  createdAt:
    type: Date
    defaultValue: new Date()
  updatedAt:
    type: Date
    autoValue: -> new Date()
Chomps.attachSchema(_schema)
