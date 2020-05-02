import {ObjectsGallery} from "./objectsgallery";

export class Plugins
{
	static pluginClasses = {
		"ObjectsGallery": ObjectsGallery,
	};

	static attachPlugin(name)
	{
		return new this.pluginClasses[name]();
	}
}