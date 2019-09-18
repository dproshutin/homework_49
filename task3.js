var figlet = require("figlet");

figlet.text(process.argv[2], function(err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
