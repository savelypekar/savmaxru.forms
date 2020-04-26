import {Type} from 'main.core';

export class ObjectGUI
{
	nodes=[];

	includeInNode(name,value)
	{
		this.nodes[name].append(value);
	}

	getAllElementsOfTheNode(name)
	{
		let node = this.nodes[name];
		let elements = [];

		for (let i = 0; i < node.childNodes.length; i++) {
			elements.push(node.childNodes[i]);
		}
		return elements;
	}

	addNode(name,type = 'div')
	{
		let node = this.createNode(type);
		this.nodes[name] = node;
		node.className = name;

		return node;
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