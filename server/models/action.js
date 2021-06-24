const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const ActionSchema = new Schema(
	{
		cardId : {
			type     : ObjectId,
      ref      : 'Card',
			required : [ true, 'The Card Id is required' ]
		},
		description : [
			{
				type: String,
				required: [ true, 'The action description is required']
			}
		]
	},
	{ timestamps: true }
);

const Action = mongoose.model('Action', ActionSchema);

module.exports = Action;
