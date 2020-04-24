import {Type} from 'main.core';

export class ObjectGUI
{
	nodes=[];

	includeInNode(name,value)
	{
		this.nodes[name].append(value);
	}

	addNode(name,type = 'div')
	{
		return this.nodes[name] = this.createNode(type);
	}

	setRootNode(node)
	{
		this.wrapper.append(node);
		this.node = node;
	}

	getHTMLObject()
	{
		return this.wrapper;
	}

	getWrapper()
	{
		return this.wrapper;
	}

	createNode(type)
	{
		return document.createElement(type);
	}

	constructor()
	{
		this.wrapper = this.createNode();
	}
}