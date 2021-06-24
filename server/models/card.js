const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { ObjectId } = Schema.Types;

const options = {
	timestamps : true,
	toJSON: {
		virtuals: true
	}
}

const CardSchema = new Schema(
	{
		title       : {
			type     : String,
			required : [ true, 'The card title is required' ]
		},
		description : {
			type : String
		},
		labels      : [ { type: String } ],
		listId      : {
			type : ObjectId,
			ref  : 'List'
		},
		position    : {
			type : Number
		},
		archived    : Boolean,
		dueDate     : Date,
		completed   : Boolean,
		boardId     : {
			type : ObjectId,
			ref  : 'Board',
			required : [ true, 'The board Id is required' ]
		},
		comments    : [ { type: ObjectId, ref: 'Comment' } ],
		// actions     : []
		// virtual property for comments count
	},
	options
);

CardSchema.virtual('commentsCount', {
	ref: 'Card',
	localField: '_id',
	foreignField: 'cardId',
}).get(function() {
	return this.comments.length;
});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;
