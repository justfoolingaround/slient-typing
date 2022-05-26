const { webpack: { getModule }, entities: { Plugin } } = require("powercord");

const typing = getModule(["startTyping"], false);
const defaultTyping = typing.startTyping;

module.exports = class SilentTyping extends Plugin {
	startPlugin() {
		typing.startTyping = (_) => { }
	};

	pluginWillUnload() {
		typing.startTyping = defaultTyping;
	};
};
