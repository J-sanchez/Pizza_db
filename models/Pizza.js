const PizzaSchema = new Schema(
    {
      pizzaName: {
        type: String
      },
      createdBy: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      size: {
        type: String,
        default: 'Large'
      },
      toppings: [],
      comments: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment'
        }
      ]
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false
    }
  );

PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.length;
  });

//Create The Pizza Model
const Pizza = model('Pizza' , PizzaSchema);

//Export The Pizza Model
module.exports = Pizza;