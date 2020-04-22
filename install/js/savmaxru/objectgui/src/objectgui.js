import {Type} from 'main.core';

export class ObjectGUI
{
	nodes=[];

	includeInNode(name,value)
	{

		this.nodes[name].append(value);
	}

	addNode(name)
	{
		return this.nodes[name] = this.createNode();
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

	createNode()
	{
		return document.createElement('div');
	}

	constructor()
	{
		this.wrapper = this.createNode();
	}
}