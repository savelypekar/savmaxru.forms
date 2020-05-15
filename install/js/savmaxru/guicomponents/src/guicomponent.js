import {Tag} from 'main.core';
import {Option} from "./option";
import {ObjectGUI} from "savmaxru.objectgui";
import {PropertyChangeManager} from "savmaxru.propertychangemanager";

export class GUIComponent extends ObjectGUI
{
	constructor(IDManager)
	{
		super();
		this.setRootNode(
			Tag.render`
			<div class="object-gui">
				<div class="field-mark">
					${this.addNode("mark")}
				</div>
				<div class="field-description">
					${ this.addNode("description") }
				</div>
				<div>
					${ this.addNode("component") }
				</div>
				<div class="field-comment">
					${this.addNode("comment")}
				</div>
					${this.addNode("edit-panel")}
			</div>`
		);
		PropertyChangeManager.connectObject(this);
	}

	getStructure()
	{
		let result = this.getProperties();
		result["options"] = [];

		let options = this.getOptions();
		for(let i = 0; i < options.length; i++)
		{
			let option = options[i];
			result["options"].push(option.getStructure());
		}
		return result;
	}


	addEditButton()
	{
		let object = Tag.render`<div class='settings'></div>`;
		let editObject = this;
		object.onclick = function() {
			editObject.getParent().editComponent(editObject);
		};
		return object;
	}

	remove()
	{
		this.removeHTMLObject();
	}

	addRemoveButton()
	{
		let object = Tag.render`<div class='remove'></div>`
		let editObject = this;
		object.onclick = function() {
			editObject.rewriteProperty("change","removed");
			editObject.hideAnimHTMLObject();
		};
		return object;
	}

	enableEditMode(modes= {
		"settings":true,"remove":true
	})
	{
		if(modes["settings"]){
			this.includeInNode("edit-panel",this.addEditButton());
		}
		if(modes["remove"] && this.getProperty('type') !== 'Button'){
			this.includeInNode("edit-panel",this.addRemoveButton());
		}
	}

	getChanges()
	{
		let question = this.getChangedProperties();
		let changedOptions = [];
		let options = this.getOptions();

		for(let i=0; i< options.length; i++)
		{
			let changedOption = options[i].getChanges();
			if(changedOption !== false)
			{
				changedOptions.push(changedOption);
			}
		}

		if(question === false && changedOptions.length !== 0)
		{
			question = [];
		}

		if(question !== false)
		{
			question["ID"] = this.getProperty("ID");
			question["type"] = this.getProperty("type");
			question["index"] = 1;
		}

		if(changedOptions.length !== 0)
		{
			question['options'] = changedOptions;
		}

		return question;
	}

	getNextHighestId()
	{
		return this.IDManager.getNextHighestId();
	}

	build(data)
	{
		if(data['IDManager']!== undefined)
		{
			this.IDManager = data['IDManager'];
		}
		if(data['description']!== undefined)
		{
			this.addProperty('description', data['description']);
			this.setDescription(data['description']);
		}
		if(data['comment']!== undefined)
		{
			this.addProperty('comment', data['comment']);
			this.setComment(data['comment']);
		}
		if(data['options']!== undefined)
		{
			this.addOptions(data['options']);
		}
		if(data['ID']!== undefined)
		{
			this.addProperty('ID', data['ID']);
		}
		if(data['index']!== undefined)
		{
			this.addProperty('index', data['index']);
		}
		if(data['type']!== undefined)
		{
			this.addProperty('type', data['type']);
		}
		if(data['required'])
		{
			this.setFieldAsRequired();
		}
	}

	options = [];

	getOptions()
	{
		return this.options;
	}

	addOptions(options,createMode = 'load')
	{
		if(options !== undefined)
		{
			for(let i = 0; i<options.length; i++)
			{
				let option = new Option(options[i],createMode);
				option.setObjectHTML(this.addOption(option.getProperty("value")));
				this.options.push(option);
			}
		}
	}

	setComponent(component)
	{
		this.includeInNode("component",component);
	}

	setDescription(description)
	{
		if(description !== undefined)
		{
			this.getNode("description").innerHTML = description;
		}
	}

	setComment(comment)
	{
		if(comment !== undefined)
		{
			this.getNode("comment").innerHTML = comment;
		}
	}

	setFieldAsRequired()
	{
		this.includeInNode("mark",'*');
	}

	getResult()
	{
		let options = this.getOptions();
		let result = [];
		result["ID"] = this.getProperty("ID");
		result["options"] = [];
		for(let i = 0; i < options.length; i++)
		{
			let option = options[i];
			if(option.getObjectHTML().getCondition())
			{
				result["options"].push(option.getProperty("ID"));
			}
		}
		return result;
	}

}