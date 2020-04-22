import {Type, Tag} from 'main.core';
import './css/style.css';

export class ObjectGUI
{
	nodes=[];

	setTemplate(template){
		this.template=template;
	}

	/*setTemplate2(template)
	{
		let placeholder = /#([^# ]+)#/;
		while(1)
		{
			let matches = (placeholder.exec(template));
			if (matches === null)
			{
				break;
			}
			let foundKeyword = (placeholder.exec(template))[1];
			this.nodes[foundKeyword] = document.createElement('div');
			template = template.replace(placeholder, '<div>${this.nodes['+foundKeyword+']}</div>');
		}
	//	Tag.render`template`;
	}*/

	createWrapper( parent, className)
	{
		let object = document.createElement('div');
		object.className = className;

		parent.append(object);

		return object;
	}

	constructor(options = { parentHTMLObject: undefined })
	{
		this.wrapper = this.createWrapper(options.parentHTMLObject,'savmaxru-object-wrapper')
	}

	addContent(placeholdersValues)
	{

		let content = this.template;
		let newTemplate = this.template;
		for (let placeholder in placeholdersValues)
		{
			let newContent = content.replace(placeholder, placeholdersValues[placeholder]);
			newTemplate = newTemplate.replace(placeholder, (placeholdersValues[placeholder]+placeholder));
			//оставляем место для повторной начинки контентом с помощью дублирования
			//плейсхолдеров
			content = newContent;
		}
		this.setTemplate(newTemplate);
		this.wrapper.innerHTML = content;

		//	let textNode = Tag.render`<span class="ui-btn-text">${ObjectGUI2.getHTMLObject()}</span>`;
		// 		document.getElementById(options.wrapperID).append(textNode);
		// 		ObjectGUI2.remove();
	}
	//лучше переписать на заммену контента
	//по мере необходимости


	include(object)
	{
		this.wrapper.append(object.getHTMLObject());
	}

	swapWithAnObject(object)
	{
		this.include(object);
		object.include(this);
	}

	getHTMLObject()
	{
		return this.wrapper;
	}
	remove()
	{
		this.wrapper.remove();
	}

}