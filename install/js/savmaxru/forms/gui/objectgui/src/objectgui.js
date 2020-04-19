import {Type} from 'main.core';
import './css/style.css';

export class ObjectGUI
{
	getHTMLObject( parent, content, className)
	{
		let object = document.createElement('div');
		object.className = className;

		object.append(content);
		parent.appendChild(object);

		return object;
	}

	constructor(options = { parentID: 'body' })
	{
		let id;
		if(options.IDManager != null)
		{
			id = options.IDManager.getNextHighestId();
		}
		this.wrapper = this.getHTMLObject(document.getElementById(options.parentID), 'тестовый контент','savmaxru-object-wrapper')
	}

	setContent(content)
	{
		this.wrapper.append(content);
	}

	remove()
	{
		this.wrapper.remove();
	}


}