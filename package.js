Package.describe({
  name: "quackware:ical-generator",
  version: "0.0.1",
  // Brief, one-line summary of the package.
  summary: "Meteor smart package for ical-generator",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/quackware/meteor-ical-generator",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md"
});

Npm.depends({
  "ical-generator": "0.2.4"
});

Package.onUse(function(api) {
  api.versionsFrom("1.2.1");

  api.export("ical");

  api.addFiles("server/ical-generator.js", "server");
});