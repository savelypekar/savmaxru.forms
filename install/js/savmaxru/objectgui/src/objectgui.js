import {Type} from 'main.core';

export class ObjectGUI
{
	nodes=[];

	setId(id)
	{
		this.id = id;
	}

	getId()
	{
		return this.id;
	}

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

	getNode(name)
	{
		return this.nodes[name];
	}

	addNode(name,type = 'div')
	{
		let node = this.createNode(type);
		this.nodes[name] = node;
		node.className = name;
		return node;
	}

	getRootNode()
	{
		return this.node;
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
		this.wrapper = this.createNode('div');
	}
}