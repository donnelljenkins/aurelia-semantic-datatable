export default class Utility {
	static camelCase(text) {
		if(!text) return text;
		
		return text.replace(/\w\S*/g, (txt) => { 
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}

	static snakeCase(text) {
		let firstCharacter = text.slice(0, 1);
		let snakeCaseEnd = text.slice(1).replace(/([A-Z])/g, "-$1").toLowerCase();
		return `${firstCharacter + snakeCaseEnd}`;
	}
}