import {Type} from 'main.core';
import {ModalWindow} from 'savmaxru.modalwindow';
import {Tag} from 'main.core';
import './css/style.css'

export class ComponentEditor
{
	constructor(parent)
	{
		this.parent = parent;

	}

	openWindow()
	{
		this.window = new Savmaxru.ModalWindow();
		this.parent.append(this.window.getHTMLObject());
	}

	create()
	{
		this.openWindow();
		let selectingAComponent = Tag.render`
		<div class="components-selection">
			<div class="btn-type-ico">
				<div class="dropdownlist-ico"></div>
				<span>Выпадающий список</span>
			</div>
			<div class="btn-type-ico">
				<div class="checkboxlist-ico"></div>
				<span>Несколько вариантов ответа</span>
			</div>
			<div class="btn-type-ico">
				<div class="radiobuttonlist-ico"></div>
				<span>Один варинта ответа</span>
			</div>
			<div class="btn-type-ico">
				<div class="singlelinetextbox-ico"></div>
				<span>Однострочный текст</span>
			</div>
			<div class="btn-type-ico">
				<div class="multilinetextbox-ico"></div>
				<span>Многострочный текст</span>
			</div>
			<div class="btn-type-ico">
				<div class="heading-ico"></div>
				<span>Заголовок</span>
			</div>
		</div>`;
		this.window.setContent(selectingAComponent);
	}
}