<?php
\Bitrix\Main\UI\Extension::load('savmaxru.lib.idmanager');

\Bitrix\Main\UI\Extension::load('savmaxru.forms.gui.objectgui');

\Bitrix\Main\UI\Extension::load('savmaxru.forms.gui.plugins.galleryofobjects');
?>

<template id="tmpl">
	<div class="message">Привет, Мир!</div>
</template>

<div class="myforms-wrapper" id="savmaxru-myforms-wrapper">

</div>

<script type="text/javascript">

	//let Idmanager = new Savmaxru.IDManager();
	//alert(Idmanager.getNextHighestId());
	//alert(Idmanager.getNextHighestId());

	//let IDManager = new Savmaxru.Forms.GUI.Plugins.GalleryOfObjects(new Savmaxru.IDManager('savmaxru-myforms'));

	//let id= new Savmaxru.IDManager({namespaceForID: 'savmaxru-myforms'});
		//new Savmaxru.IDManager('savmaxru-myforms')

	//alert(id.getNextHighestId());
//
	//IDManager: new Savmaxru.IDManager({namespaceForID: 'savmaxru-myforms'}
	let ObjectGUI = new Savmaxru.Forms.GUI.ObjectGUI({ parentID:'savmaxru-myforms-wrapper' });
	ObjectGUI.remove();

	//ObjectGui.renderHTML('savmaxru-myforms-wrapper','<div class="test">nnn</div>')
	//alert(3);

	//alert(Savmaxru.IDManager.getNextHighestId('ss'));
	//alert(Savmaxru.IDManager.getNextHighestId('ss'));
	//let example = new Savmaxru.Forms.GUI.Components.Dropdownlist();
	//{
	//		templateID: "tmpl",
	//		parentID: "savmaxru-forms-main-container"
	//	}
//alert(1);
</script>

dd