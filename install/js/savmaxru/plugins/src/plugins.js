import {ObjectsGallery} from "./objectsgallery";

export class Plugins
{
	static pluginClasses = {
		"ObjectsGallery": ObjectsGallery,
	};

	static attachPlugin(name,argument)
	{
		return new this.pluginClasses[name](argument);
	}
}