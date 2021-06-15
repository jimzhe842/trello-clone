const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;
const Card = require('./card')

const ListSchema = new Schema(
	{
		title    : {
			type     : String,
			required : [ true, 'The list title is required' ]
		},
		boardId  : {
			type     : ObjectId,
			required : [ true, 'The Board Id is required' ],
			ref      : 'Board'
		},
		position : {
			type : Number
		},
		cards    : [
			{
				type : ObjectId,
				ref  : 'Card'
			}
		]
	},
	{ timestamps: true }
);

const List = mongoose.model('List', ListSchema);

module.exports = List;
