/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"pina/star_wars_review/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});