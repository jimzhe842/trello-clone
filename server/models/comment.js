const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { ObjectId } = Schema.Types;

const options = {
  timestamps: true
}

const CommentSchema = new Schema(
  {
    text: {
      type: String,
      required : [ true, 'Comments cannot be empty' ]
    },
    cardId: {
      type: ObjectId,
      ref: 'Card',
      required : [ true, 'CardId is required' ]
    }
  },
  options
);

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;