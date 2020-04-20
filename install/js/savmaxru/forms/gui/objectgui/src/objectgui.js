import {Type} from 'main.core';
import './css/style.css';

export class ObjectGUI
{
	createWrapper( parent, content, className)
	{
		let object = document.createElement('div');
		object.className = className;

		object.append(content);
		parent.appendChild(object);

		return object;
	}

	createContentByTemplate(template,placeholdersValues)
	{
		let content = template;
		for (let placeholder in placeholdersValues)
		{
			content = content.replace(placeholder, placeholdersValues[placeholder]);
		}
		return content;
	}

	constructor(options = { parentID: 'body' })
	{
		this.wrapper = this.createWrapper(document.getElementById(options.parentID), 'тестовый контент','savmaxru-object-wrapper')
	}

	setContent(template,placeholdersValues)
	{
		this.wrapper.innerHTML = this.createContentByTemplate(template,placeholdersValues);
	}

	remove()
	{
		this.wrapper.remove();
	}


}