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

	getNode(name)
	{
		return this.nodes[name];
	}

	addNode(name,type = 'div')
	{
		let node = this.createNode(type);
		node.parent = this;
		this.nodes[name] = node;
		node.className = name;
		return node;
	}

	getRootNode()
	{
		return this.node;
	}

	setParent(parent)
	{
		this.parent = parent;
	}

	getParent()
	{
		return this.parent;
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

	remove()
	{
		this.wrapper.remove();
	}
}