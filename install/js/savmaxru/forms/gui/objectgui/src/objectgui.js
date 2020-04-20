import {Type} from 'main.core';
import './css/style.css';

export class ObjectGUI
{
	createWrapper( parent, className)
	{
		let object = document.createElement('div');
		object.className = className;

		parent.appendChild(object);

		return object;
	}

	constructor(options = { parentHTMLObject: undefined })
	{
		this.wrapper = this.createWrapper(options.parentHTMLObject,'savmaxru-object-wrapper')
	}

	setTemplate(template)
	{
		this.template = template;
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